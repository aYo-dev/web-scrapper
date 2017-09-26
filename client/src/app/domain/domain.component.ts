import { Component } from '@angular/core';
import Domain from './Domain';
import {NgForm} from '@angular/forms';
import { DomainService }  from './DomainService';

@Component({
  selector: 'domain-wrapper',
  templateUrl: 'domain.component.html'
})
export class DomainComponent {
  title = 'Domain config page';

  model = {
    domain: '',
    method: '',
    meta: [{selector: '', rule: '', temaplate: ''}]
  };

  methods = ['xml', 'html'];

  rules = ['digit', 'templateString'];

  addField () {
    this.model.meta.push({selector: '', rule: '', temaplate: ''});
  }

  onSubmit(data: NgForm) {
    const domainService = new DomainService();
    const domain = new Domain(this.model.domain, this.model.method, this.model.meta);
    domainService.send(domain);
  }
}
