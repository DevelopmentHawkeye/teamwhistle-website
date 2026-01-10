import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent {

  qnaList = [
    {
      question: 'Where is TeamWhistle available?',
      answer: 'TeamWhistle is only available on Apple Watches with a minimum watchOS version of 9.6.',
      isOpen: false
    },
    {
      question: 'How do I install TeamWhistle?',
      answer: 'TeamWhistle can be installed via the App Store on your Apple Watch or with your paired iPhone. If the app doesn\'t automatically download, go to the App Store on your Apple Watch, scroll down to Account, tap Purchased, and find TeamWhistle in the list to download it manually.',
      isOpen: false
    },
    {
      question: 'What does TeamWhistle cost?',
      answer: 'Nothing. It\'s completely free to use so everyone can benefit from it.',
      isOpen: false
    },
    {
      question: 'Who made TeamWhistle?',
      answer: 'TeamWhistle was created by Hawkeye Development, a small indie development studio made for publishing this app by developer Homerus Hoogland. As a federal umpire in training in the Netherlands and a student of Software Engineering, Homerus developed TeamWhistle to address the lack of whistle apps for Apple Watch and help referees and umpires perform their duties more effectively.',
      isOpen: false
    },
    {
      question: 'How can I reach you?',
      answer: 'I can be reached via the Contact page on this site via the "Contact" link in the top navigation bar. You can also give me a message on Discord via our server available by clicking the Discord icon at the bottom of this page. I can also be reached at developmenthawkeye@gmail.com.',
      isOpen: false
    },
  ];

  toggle(index: number): void {
    this.qnaList.forEach((qna, i) => {
      qna.isOpen = i === index ? !qna.isOpen : false;
    });
  }
}
