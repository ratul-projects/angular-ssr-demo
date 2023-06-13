import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public title: Title,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const {name = ''} = this.route.snapshot.data?.userData?.personalInfo || {};
    this.title.setTitle(name);
  }

}
