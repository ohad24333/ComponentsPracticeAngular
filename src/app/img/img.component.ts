import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  constructor() { }

   
  car = {
    color: "blue",
    model: "lamborgini"
  }
  ngOnInit(): void {
  }
 
 
   imgsrc = "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png";

  
}
