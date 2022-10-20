import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post!: IPost;

  @ContentChild('info', { static: true }) infoRef!: ElementRef;

  @Output() rm: EventEmitter<number> = new EventEmitter<number>();

  ngOnDestroy(): void {}
  ngOnInit(): void {}
  removePost() {
    this.rm.emit(<number>this.post.id);
  }
}

// // ngOnChanges(changes: SimpleChanges): void {
// //   console.log('Changes ohhh');
// // }

// // ngDoCheck(): void {
// //   console.log('Chech omg');
// // }

// // ngAfterContentInit(): void {
// //   console.log('After?');
// // }

// // ngAfterContentChecked(): void {
// //   console.log('Check2');
// // }

// // ngAfterViewInit(): void {
// //   console.log('ViewInit');
// // }

// ngOnDestroy(): void {
//   console.log('Destroy?')
// }

// ngOnInit(): void {
//   // console.log(this.infoRef.nativeElement);
// }
