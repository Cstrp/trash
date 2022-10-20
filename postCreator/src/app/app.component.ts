import { Component } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
  id?: string | number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: IPost[] = [
    {
      title: 'First post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reprehenderit.',
      id: 1,
    },
    {
      title: 'Second post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reprehenderit.',
      id: 2,
    },
    {
      title: 'Third post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reprehenderit.',
      id: 3,
    },
  ];
  title: string = 'Post Creator!!!';

  ngOnInit() {}

  removePost(id: number) {
    console.log(id, 'id???');
    this.posts = this.posts.filter((i) => i.id !== id);
  }

  updatePosts(post: IPost) {
    this.posts.unshift(post);
  }
}
