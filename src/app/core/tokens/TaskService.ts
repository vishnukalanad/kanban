import {InjectionToken} from '@angular/core';
import {ITaskService} from '../interfaces/ITaskService';

export const TASK_SERVICE = new InjectionToken<ITaskService>("TASK_SERVICE");
