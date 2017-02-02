import { 
    Component, Input, trigger, state, style, transition, animate
} from '@angular/core';

@Component({
  selector: 'my-menu',
  moduleId: module.id,
  styleUrls: ['hamburgers.css', 'menu.css'],
  animations: [
        trigger('flipImage', [
            state('inactive', style({
                transform: 'rotateY(0deg)',
                'transform-style': 'preserve-3d'
            })),
            state('active', style({
                transform: 'rotateY(180deg)',
                'transform-style': 'preserve-3d'
            })),
            transition('inactive => active', animate('.5s linear')),
            transition('active => inactive', animate('.5s linear'))
        ])
  ],
  templateUrl: `menu.html`
})
export class MenuComponent  {
    menus: Object;
    curdata: Object;
    state: string = 'inactive';
    constructor(){
        this.menus = [
            {
                name: 'Home', link: 'home'
            },
            {
                name: 'About', link: 'about'
            },
            {
                name: {
                    origname: 'Services',
                    subname: [
                        {name: 'Service1', link: 'service1', img: 'http://www.ecoteknologi.no/wp-content/uploads/2016/10/img5.jpg'},
                        {name: 'Service2', link: 'service2', img: 'http://www.ecoteknologi.no/wp-content/uploads/2016/10/img6.jpg'},
                        {name: 'Service3', link: 'service3', img: 'http://www.ecoteknologi.no/wp-content/uploads/2016/10/img7.jpg'},
                    ]
                },
                link: 'services'
            },
            {
                name: 'Contact', link: 'contact'
            }
        ];
        this.curdata = this.menus[2]['name']['subname'][0];
    }

    showDetails(data: Object){
        setTimeout(() => {
            this.curdata = data;
        }, 250);
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
}