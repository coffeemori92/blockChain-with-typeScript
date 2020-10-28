import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  }
  static validateStructure = (aBlock: Block): boolean => {
    return (
      typeof aBlock.index === 'number' &&
      typeof aBlock.hash === 'string' &&
      typeof aBlock.previousHash === 'string' &&
      typeof aBlock.data === 'string' &&
      typeof aBlock.timestamp === 'number'
    );
  }
  constructor(
    index: number, 
    hash: string, 
    previousHash: string,
    data: string,
    timestamp: number
    ) {
      this.index = index;
      this.hash = hash;
      this.previousHash =previousHash;
      this.data = data;
      this.timestamp = timestamp;
  }
}

const createBlock: Block = new Block(0, '202020202020', '', 'hello', Math.round(new Date().getTime() / 1000));

let blockchain: Block[] = [createBlock];

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
  addBlock(newBlock);
  return newBlock;
};

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if(!Block.validateStructure(candidateBlock)) return false;
  if(previousBlock.index + 1 !== candidateBlock.index) return false;
  if(previousBlock.hash !== candidateBlock.previousHash) return false;
  if(getHashforBlock(candidateBlock) !== candidateBlock.hash) return false;
  return true;
};

const addBlock = (candidateBlock: Block): void => {
  if(isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock('a block');
createNewBlock('b block');
createNewBlock('c block');

console.log(blockchain);