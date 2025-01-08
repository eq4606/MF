import { Component, OnInit } from '@angular/core';
import { Asset } from '../../models/asset.model';
import { AssetService } from '../../services/asset.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-asset-list',
  imports: [NgFor],
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  assets: Asset[] = [];

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    this.assetService.getAssets().subscribe((assets) => (this.assets = assets));
  }

  deleteAsset(id: string): void {
    this.assetService.deleteAsset(id);
    this.assets = this.assets.filter((asset) => asset.id !== id);
  }
}