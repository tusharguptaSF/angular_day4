import { Component, OnInit, Input } from '@angular/core';
import { ContactModule } from 'src/app/model/contact/contact.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() 
  contact:ContactModule ;

  constructor() { }

  ngOnInit(): void {
  }

}
