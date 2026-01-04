// app.component.ts
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
})
export class GuideComponent implements AfterViewInit {

  flatSteps: GuideStep[] = [];
  activeSection: any;

  ngOnInit() {
    this.data.forEach((chapter, chapterIndex) => {
      chapter.steps.forEach((step, stepIndex) => {
        this.flatSteps.push({
          chapterIndex,
          stepIndex,
          chapterTitle: chapter.title,
          step
        });
      });
    });

    this.activeSection = this.flatSteps[0].step.media;
  }

  @ViewChildren('card', { read: ElementRef })
  cards!: QueryList<ElementRef>;
  @ViewChildren('activeVideo', { read: ElementRef })
  videos!: QueryList<ElementRef<HTMLVideoElement>>;

  activeChapterIndex = 0;
  activeCardIndex = 0;
  activeMedia: any;

  ngAfterViewInit() {
  const observer = new IntersectionObserver(
    entries => {
      const viewportCenter = window.innerHeight / 2;

      let closestEntry: IntersectionObserverEntry | null = null;
      let closestDistance = Infinity;

      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const rect = entry.boundingClientRect;
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestEntry = entry;
        }
      });

      if (closestEntry) {
        closestEntry = closestEntry as IntersectionObserverEntry;
        
        const index = Number(
          closestEntry.target.getAttribute('data-index')
        );
        const chapterIndex = Number(
          closestEntry.target.getAttribute('data-chapter')
        );

        this.activeCardIndex = index;
        this.activeChapterIndex = chapterIndex;
        this.activeMedia = this.flatSteps[index].step.media;

        this.activeMedia = this.flatSteps[index].step.media;

        requestAnimationFrame(() => {
          const video = this.videos?.first?.nativeElement;
          if (!video) return;

          video.currentTime = 0;
          video.play().catch(() => {
            console.log('Autoplay blocked');
          });
        });
      }
    },
    {
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0.25, 0.5, 0.75]
    }
  );

  this.cards.forEach(card =>
    observer.observe(card.nativeElement)
  );
}


  scrollToChapter(chapterIndex: number) {
  const target = this.cards.find(
    card =>
      Number(card.nativeElement.getAttribute('data-chapter')) === chapterIndex
  );

  target?.nativeElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


  data = [
    {
      number: 1,
      title: 'Basics',
      steps: [
        {
          id: 'intro',
          title: 'What is TeamWhistle?',
          content: 'TeamWhistle is a watchOS app for hockey referees to help keep track of information from matches. The app has many different functionalities and has been extensively made to help in every use case.',
          media: {
            type: 'image',
            src: '/assets/guidefootage/1homescreen.png'
          }
        },
        {
          id: 'homescreen',
          title: 'Home screen',
          content: 'When first opening the app, you are presented with 3 buttons. The top whistle icon brings you to your matches list. This is where you will create and start your matches. The cog wheel brings you to the settings page, where you can customize some functionality. Finally the question mark brings you to the help page which has some small information about the app aswell as the link to this website.',
          media: {
            type: 'image',
            src: '/assets/guidefootage/1homescreen.png'
          }
        },
        {
          id: 'matchestlist',
          title: 'Viewing your matches',
          content: 'In the matches list you will see all matches you have created. Tapping on one will show you all the details of the match. You are able to swipe a match to the left to either delete or quickly start it.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/1matcheslist.mp4'
          }
        },
        {
          id: 'addingamatch',
          title: 'Adding a match',
          content: 'To add a match, simply click the "add" button on the top left. This will open up the add match sheet. On the first page you can choose the club name and color of the home and away club. Tapping the down arrow will open a preset list for all clubs inside the Netherlands. The color list has a small set of most used colors you can tap to use. On the next page you can choose the date and add a note. After that you can add objectives for yourself and choose if the match is outdoor or indoor. Finally, in the last page you choose how the periods are organized. You can choose from a few presets or manually create periods with a set time. When youre done, tap the create button and the match will appear on the list.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/1addingamatch.mp4'
          }
        },
        {
          id: 'viewingmatch',
          title: 'Viewing a match',
          content: 'Tapping a match in the list will open up the detail view, showing you all information of the match. If the match has been finished it will also show the goals, shootouts and a timeline view showing in chronological order when a card or goal was added. At the bottom you can delete, edit or start a match.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/1viewingamatch.mp4'
          }
        }
      ]
    },
    {
      number: 2,
      title: 'Running a match',
      steps: [
        {
          id: 'startingamatch',
          title: 'Starting a match',
          content: 'To start a match, tap on one in the list and in the detail view go to the start button at the bottom. This will take you into a set of screens purely for this match.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/2startingamatch.mp4'
          }
        },
        {
          id: 'timeview',
          title: 'Time view',
          content: 'The first page in your match screen is the time view. Here you can see on the top left the remainigtime and elapsedtime and on the right the remaining penalty cornerseconds aswell as how many players are currently allowed to be on the pitch per team. To start or pause the time, tap the start/stop button at the bottom. You also have the ability to start a countdown for the time by tapping the countdown icon on the bottom left. This is will start a countdown of a few seconds and automatically start the time when the countdown is finished. When the time is paused, a timer keeps track of how long the time is has been paused. While the time is running, the next expiring card will appear in the middle.',
          media: {
            type: 'image',
            src: '/assets/guidefootage/2timeview.png'
          }
        },
        {
          id: 'goalsview',
          title: 'Goals view',
          content: 'The goals view allows you to add goals to either team by holding the counter for 1 second. You can see the history of your goals by tapping the history button at the top. You can delete goals in this view by swiping a goal to the left and tapping the trash button.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/2goalsview.mp4'
          }
        },
        {
          id: 'cardsview',
          title: 'Cards view',
          content: 'In the cards view you can add cards by tapping the add button on top. In here you can select the team, reason, backnumber, color and if it was for a captain. To delete a card, simply a tap one on the list. When a card is over you will receive a popup displaying the card color, number and team for which a card has expired.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/2cardsview.mp4'
          }
        },
        {
          id: 'workoutview',
          title: 'Workout view',
          content: 'TeamWhistle keeps track of your workout metrics such as distrance traveled and your heartrate. In this view you can see your real time values of these metrics.',
          media: {
            type: 'image',
            src: '/assets/guidefootage/2workoutview.png'
          }
        },
        {
          id: 'settingsview',
          title: 'Settings view',
          content: 'The settings page lets take drastic changes to the match, such as changing the period and starting the shootouts. Simply tap on one of the buttons to perform their described action.',
          media: {
            type: 'image',
            src: '/assets/guidefootage/2settingsview.png'
          }
        },
      ]
    },
    {
      number: 3,
      title: 'Shootouts',
      steps: [
        {
          id: 'startingshootouts',
          title: 'Starting shootouts',
          content: 'To start shootouts, tap the Start Shootouts button the settings view and confirm the prompt. This will change the tabs you have available. The cards and workout pages will still be same, but the goals and time views will change.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/3startingshootouts.mp4'
          }
        },
        {
          id: 'shootoutstimer',
          title: 'Shootout timer',
          content: 'In the center is the timer page with purely the countdown seconds. The controls are the same as the normal match timer, however you can only reset the countdown instead of stop it halfway through.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/3shootoutstimer.mp4'
          }
        },
        {
          id: 'shootoutsgoals',
          title: 'Shootout goals',
          content: 'The shootout goals will be shown as dots with the color indicating if the was scored or not. Simply press the miss or goal button the change the color of currently selected shootout and the selection will automatically go to the next. You can use the buttons on the right to delete a shootout or change the order. If enough shootouts are scored by one team to decide a winner, the app will show a text at the top indicating that a team has won the shootout.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/3shootoutsgoals.mp4'
          }
        },
      ]
    },
    {
      number: 4,
      title: 'Synchronisation',
      steps: [
        {
          id: 'whatissynchronisation',
          title: 'What is synchronisation?',
          content: 'Synchronisation is a unique feature that allows user to connect their match to eachother so that their information is exactly the same for both. This is helpful to ensure that the time remainingtime, goals or cards are the same for either referee. Obviously, an internet connection is required to access this feature.',
          media: {
            type: 'image',
            src: '/assets/homepageimages/sync.png'
          }
        },
        {
          id: 'hostingamatch',
          title: 'Hosting a match',
          content: 'To allow others to join your match, go to settings view and tap on Synchronisation. Input your name and tap launch. You will be given a key at the top that allows others to join you. Do not share this key publicly, as it is the only authentication needed for others to join you.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/4hostingamatch.mp4'
          }
        },
        {
          id: 'joiningamatch',
          title: 'Joining a match',
          content: 'To join a match, go to your matches list and tap the hotspot icon on the top right. Insert your name and the key of the hoster and tap join. This will automatically put you into the match views.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/4joiningamatch.mp4'
          }
        },
        {
          id: 'synchronisationduringamatch',
          title: 'Synchronisation during a match',
          content: 'While synchronisation is active, you will see a hotspot icon on the top left to indicate if the connection is still active. Yellow indicates its checking the match, green means it succeeded and red means a failure to fetch the match. In the synchronisation page you can see all users that have joined as well as a crown icon indicating who hosted it.',
          media: {
            type: 'image',
            src: '/assets/guidefootage/4syncduringmatch.png'
          }
        },
        {
          id: 'stoppingsynchronisation',
          title: 'Stopping synchronisation',
          content: 'To stop the synchronisation go to the match settings, tap synchronisation and tap disband. This will put you out of the synchronisation, but you will still be inside the match views. Disclaimer: Anyone can disband a match, but this will have no effect on other users and your name will still be in the list for others to see.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/4stoppingsynchronisation.mp4'
          }
        },
      ]
    },
    {
      number: 5,
      title: 'Extra information',
      steps: [
        {
          id: 'extrainformation',
          title: 'Extra information',
          content: 'Here are some extra small pieces of information about extra functionality that might prove useful in some scenarios',
          media: {
            type: 'image',
            src: '/assets/guidefootage/1homescreen.png'
          }
        },
        {
          id: 'scrollaction',
          title: 'Scroll action',
          content: 'While in a match and on the time view, you can make scrolling the digital crown perform an action while the screen is active. This action can be configured in the settings. This is useful if you want to stop/pause the time while not looking at the screen or quickly add a card without having to swipe to the card views.',
          media: {
            type: 'image',
            src: '/assets/guidefootage/5scrollaction.png'
          }
        },
        {
          id: 'captainbacknumbers',
          title: 'Captain backnumbers',
          content: 'While inside the add match view, you can swipe to the right in the club list view to type the backnumber of the club. This number will be shown during a match at the goals page next to the name of the club above the goal buttons.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/5captainnumbers.mp4'
          }
        },
        {
          id: 'actionbutton',
          title: 'Action Button',
          content: 'TeamWhistle supports the use of the action button. To use it for the app, go to your apple watch settings -> Action Button -> Workouts and choose TeamWhistle. When outside a match, the action button will start the next upcoming future match automatically. During a match, the action button can be used to pause or start the time.',
          media: {
            type: 'video',
            src: '/assets/guidefootage/5actionbutton.mp4'
          }
        },
      ]
    },
  ];
}


interface GuideStep {
  chapterIndex: number;
  stepIndex: number;
  chapterTitle: string;
  step: any;
}
