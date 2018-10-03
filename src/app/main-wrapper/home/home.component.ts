import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars = [
  {
    id: '7995f954-d92d-4dc3-848e-1b05dc6c9051',
    title: 'Mazda',
    description: 'Viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus',
    image: 'http://dummyimage.com/400x400.png/cc0000/ffffff'
  },
  {
    id: '8ae1b7d1-a6ca-4c6b-9539-af3b69dfef2b',
    title: 'Dodge',
    description: 'Non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris',
    image: 'http://dummyimage.com/400x400.png/5fa2dd/ffffff'
  },
  {
    id: '053fedbf-27ac-4462-a31c-8d913ec2aee8',
    title: 'Pontiac',
    description: 'Proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis',
    image: 'http://dummyimage.com/400x400.png/5fa2dd/ffffff'
  },
  {
    id: '16426c19-ab00-444c-a6cb-fbbb107b2368',
    title: 'Cadillac',
    description: 'At vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci',
    image: 'http://dummyimage.com/400x400.png/ff4444/ffffff'
  },
  {
    id: 'a566f587-3f32-4471-b1dc-886ef1d30ac2',
    title: 'Dodge',
    description: 'At lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at',
    image: 'http://dummyimage.com/400x400.png/ff4444/ffffff'
  },
  {
    id: '387c61d4-6af4-4687-accb-03c726f2a5c1',
    title: 'Nissan',
    description: 'Molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec',
    image: 'http://dummyimage.com/400x400.png/5fa2dd/ffffff'
  },
  {
    id: 'f4923ca4-b28b-40cd-9db2-c81df030b1b7',
    title: 'GMC',
    description: 'Pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper',
    image: 'http://dummyimage.com/400x400.png/5fa2dd/ffffff'
  },
  {
    id: '1a82c4cf-8731-4d70-b58c-e185dbdb3897',
    title: 'Ferrari',
    description: 'Rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer',
    image: 'http://dummyimage.com/400x400.png/cc0000/ffffff'
  },
  {
    id: '12911ec6-b1a1-4166-8680-8ed096375bd2',
    title: 'Ford',
    description: 'Curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet',
    image: 'http://dummyimage.com/400x400.png/dddddd/000000'
  }];

  constructor() { }

  ngOnInit() {
  }

  onRemoveCard(id) {
    const selectedCar = this.cars.find((element) => {
      return element.id === id;
    });

    const index = this.cars.indexOf(selectedCar);

    this.cars.splice(index, 1);
  }

}
