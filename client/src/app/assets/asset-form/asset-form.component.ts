import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Asset, AssetType } from '../../models/asset.model';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.scss'],
})
export class AssetFormComponent {
  @Input() asset: Asset = new Asset('', '', 'img', '', '', new Date());
  @Output() save = new EventEmitter<Asset>();

  assetTypes: AssetType[] = ['img', 'media', 'document'];

  onSubmit(): void {
    this.save.emit(this.asset);
  }
}
