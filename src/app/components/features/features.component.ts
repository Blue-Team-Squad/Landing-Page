import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features = [
    { title: 'Desenvolvimento Web', description: 'Sites e aplicações web personalizadas' },
    { title: 'Mobile Apps', description: 'Aplicativos móveis nativos e híbridos' },
    { title: 'Cloud Solutions', description: 'Infraestrutura e soluções em nuvem escaláveis' }
  ];
}
