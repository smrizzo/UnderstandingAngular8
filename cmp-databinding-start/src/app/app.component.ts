import { Component, ViewChild } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test' }];
  // @ViewChild(CockpitComponent, { static: true}) testChild;

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    // console.log(this.testChild);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  onFirstChange() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyTest() {
    this.serverElements.splice(0, 1);
  }

}
