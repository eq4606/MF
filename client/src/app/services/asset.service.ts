import { Injectable } from '@angular/core';
import { Asset, AssetType } from '../models/asset.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private assets: Asset[] = [
    new Asset('101', 'Image 1', 'img', 'https://example.com/image1.jpg', '1', new Date()),
    new Asset('102', 'Document 1', 'document', 'https://example.com/doc1.pdf', '1', new Date()),
    new Asset('103', 'Audio 1', 'media', 'https://example.com/doc1.pdf', '1', new Date()),
    new Asset('104', 'Video 1', 'media', 'https://example.com/doc1.pdf', '1', new Date()),
  ];

  getAssets(): Observable<Asset[]> {
    return of(this.assets);
  }

  getAssetById(id: string): Observable<Asset | undefined> {
    return of(this.assets.find((asset) => asset.id === id));
  }

  addAsset(asset: Asset): void {
    this.assets.push(asset);
  }

  updateAsset(updatedAsset: Asset): void {
    const index = this.assets.findIndex((asset) => asset.id === updatedAsset.id);
    if (index !== -1) {
      this.assets[index] = updatedAsset;
    }
  }

  deleteAsset(id: string): void {
    this.assets = this.assets.filter((asset) => asset.id !== id);
  }
}