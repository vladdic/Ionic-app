import {router} from './app/providers';
import {app} from './app'
  
router.isReady().then(() => {
  app.mount('#app');
});


