export type AssetType = 'img' | 'media' | 'document';

export class Asset {
  id: string;
  name: string;
  type: AssetType;
  url: string;
  createdBy: string; // User ID of the creator
  createdAt: Date;

  constructor(
    id: string,
    name: string,
    type: AssetType,
    url: string,
    createdBy: string,
    createdAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.url = url;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
  }
}