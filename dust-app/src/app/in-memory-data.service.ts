import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, username: 'Mr. Nice', firstname: '', lastname: '', organization: '', email: '' },
      { id: 12, username: 'Narco', firstname: '', lastname: '', organization: '', email: '' },
      { id: 13, username: 'Bombasto', firstname: '', lastname: '', organization: '', email: '' },
      { id: 14, username: 'Celeritas', firstname: '', lastname: '', organization: '', email: '' },
      { id: 15, username: 'Magneta', firstname: '', lastname: '', organization: '', email: '' },
      { id: 16, username: 'RubberMan', firstname: '', lastname: '', organization: '', email: '' },
      { id: 17, username: 'Dynama', firstname: '', lastname: '', organization: '', email: '' },
      { id: 18, username: 'Dr IQ', firstname: '', lastname: '', organization: '', email: '' },
      { id: 19, username: 'Magma', firstname: '', lastname: '', organization: '', email: '' },
      { id: 20, username: 'Tornado', firstname: '', lastname: '', organization: '', email: '' }
    ];
    return {users};
  }
}
