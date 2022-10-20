import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  @Output('post') post: EventEmitter<IPost> = new EventEmitter<IPost>();

  @ViewChild('ttl') InputRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addPost() {
    const post: IPost = this.form.value;

    this.post.emit(post);

    this.form.reset();
  }

  focus() {
    this.InputRef.nativeElement.focus();
  }
}
