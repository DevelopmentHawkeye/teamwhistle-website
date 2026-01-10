
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent {

  qnaList = [
    {
      question: 'qna.q1.q',
      answer: 'qna.q1.a',
      isOpen: false
    },
    {
      question: 'qna.q2.q',
      answer: 'qna.q2.a',
      isOpen: false
    },
    {
      question: 'qna.q3.q',
      answer: 'qna.q3.a',
      isOpen: false
    },
    {
      question: 'qna.q4.q',
      answer: 'qna.q4.a',
      isOpen: false
    },
    {
      question: 'qna.q5.q',
      answer: 'qna.q5.a',
      isOpen: false
    },
  ];

  toggle(index: number): void {
    this.qnaList.forEach((qna, i) => {
      qna.isOpen = i === index ? !qna.isOpen : false;
    });
  }
}
