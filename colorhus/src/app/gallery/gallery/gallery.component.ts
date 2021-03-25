import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 10,
  };

  @ViewChild(NgxMasonryComponent) masonry?: NgxMasonryComponent;

  masonryImages: [boolean, string][] = [];
  limit = 15;

  dummyPictures: [boolean, string][] = [
    [false, '../../../assets/images/gallery/img2.jpg'],
    [false, '../../../assets/images/gallery/img3.jpg'],
    [false, '../../../assets/images/gallery/img4.jpg'],
    [false, '../../../assets/images/gallery/img5.jpg'],
    [false, '../../../assets/images/gallery/img6.jpg'],
    [false, '../../../assets/images/gallery/img7.jpg'],
    [false, '../../../assets/images/gallery/img8.jpg'],
    [false, '../../../assets/images/gallery/img9.jpg'],
    [false, '../../../assets/images/gallery/img10.jpg'],
    [false, '../../../assets/images/gallery/img11.jpg'],
    [false, '../../../assets/images/gallery/img12.jpg'],
    [false, '../../../assets/images/gallery/img13.jpg'],
    [false, '../../../assets/images/gallery/img14.jpg'],
    [false, '../../../assets/images/gallery/img15.jpg'],
    [false, '../../../assets/images/gallery/img16.jpg'],
    [false, '../../../assets/images/gallery/img17.jpg'],
    [false, '../../../assets/images/gallery/img18.jpg'],
    [false, '../../../assets/images/gallery/img19.jpg'],
    [false, '../../../assets/images/gallery/img20.jpg'],
    [false, '../../../assets/images/gallery/img21.jpg'],
    [false, '../../../assets/images/gallery/img22.jpg'],
    [false, '../../../assets/images/gallery/img23.jpg'],
    [false, '../../../assets/images/gallery/img24.jpg'],
    [false, '../../../assets/images/gallery/img25.jpg'],
    [false, '../../../assets/images/gallery/img26.jpg'],
    [false, '../../../assets/images/gallery/img27.jpg'],
    [false, '../../../assets/images/gallery/img28.jpg'],
    [false, '../../../assets/images/gallery/img29.jpg'],
    [false, '../../../assets/images/gallery/img30.jpg'],
    [false, '../../../assets/images/gallery/img31.jpg'],
    [false, '../../../assets/images/gallery/img33.jpg'],
    [false, '../../../assets/images/gallery/img34.jpg'],
    [false, '../../../assets/images/gallery/img35.jpg'],
    [false, '../../../assets/images/gallery/img36.jpg'],
    [false, '../../../assets/images/gallery/img37.jpg'],
    [false, '../../../assets/images/gallery/img38.jpg'],
    [false, '../../../assets/images/gallery/img39.jpg'],
    [false, '../../../assets/images/gallery/img40.jpg'],
    [false, '../../../assets/images/gallery/img42.jpg'],
    [false, '../../../assets/images/gallery/img43.jpg'],
    [false, '../../../assets/images/gallery/img44.jpg'],
  ];

  constructor() {}

  ngOnInit(): void {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  insertImage() {
    this.masonryImages.splice(0, 0, this.dummyPictures[0]);
    this.masonry?.reloadItems();
    this.masonry?.layout();
  }
  prependImage() {
    const image = this.dummyPictures[50];
    image[0] = true;
    this.masonryImages.push(image);
  }

  removeImage() {
    this.masonryImages.pop();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
}
