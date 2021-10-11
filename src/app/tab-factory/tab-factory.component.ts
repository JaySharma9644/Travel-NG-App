import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
} from '@angular/core';
import { AppConfigService } from '../app-config.service';
import { AddDynamiTemplate } from '../add-dynamic-component';
import { AddHostDirective } from '../add-host.directive';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-tab-factory',
  templateUrl: './tab-factory.component.html',
  styleUrls: ['./tab-factory.component.scss'],
})
export class TabFactoryComponent implements OnInit {
  tabsConfig;
  activeTab = 1;
  @ViewChild(AddHostDirective, { static: true }) adHost!: AddHostDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private configService: AppConfigService,
    private mockService: MockDataService
  ) {}

  ngOnInit() {
    this.tabsConfig = this.configService.getConfiguration();
    this.showtab(this.tabsConfig.tabs[this.activeTab - 1]);
  }

  showtab(tabContent) {
    this.activeTab = tabContent.id;
    var tab = new AddDynamiTemplate(tabContent.component, tabContent.data);
    this.loadComponent(tabContent, tab);
  }
  async loadComponent(tabContent, tab) {
    // here we can make componentFactory of any type just declaring componentFactory Interface

    var componentFactory: any;
    componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tab.component
    );
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<any>(componentFactory);

    componentRef.instance.data = {entity:tabContent.entity ,id : tabContent.id,entityCode:tabContent.entityCode};
  }
}
