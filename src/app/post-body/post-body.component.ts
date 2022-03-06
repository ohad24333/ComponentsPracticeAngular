import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  getPost(){
    
    return `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi labore odio doloribus amet omnis, quia enim maiores dignissimos ratione. Sit itaque perspiciatis reprehenderit, similique molestiae porro rerum consequuntur facilis esse?`;
  }

}


