// Storage interface - not used for static site
export interface IStorage {}

export class MemStorage implements IStorage {}

export const storage = new MemStorage();
