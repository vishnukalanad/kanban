import {Injectable, ViewContainerRef} from '@angular/core';
import {Toast} from '../../components/toast/toast';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private containerRef!: ViewContainerRef;

  registerContainer(container: ViewContainerRef) {
    this.containerRef = container
  }

  show(title: string, message: string, type: "success" | "failure") {
    if (!this.containerRef) return;

    const toast = this.containerRef.createComponent(Toast)

    toast.setInput('title', title);
    toast.setInput('message', message);
    toast.setInput('type', type);

    setTimeout(() => {
      toast.destroy();
    }, 4000);
  }

  success(title: string, message: string) {
    this.show(title, message, "success");
  }

  failure(title: string, message: string) {
    this.show(title, message, "failure");
  }
}
