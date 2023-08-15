import {expect} from '@loopback/testlab';
import {UserController} from '../../../controllers';
import {PgDataSource} from '../../../datasources';
import {User} from '../../../models';
import {UserRepository} from '../../../repositories';

describe('User Controller Connect Real Database', () => {
  let userController: UserController;

  beforeEach(() => {
    const pgDataSource = new PgDataSource();
    const userRepo = new UserRepository(pgDataSource);
    userController = new UserController(userRepo);
  });

  describe('User Controller', () => {
    it('Query ข้อมูล User เชื่อมต่อจริง', async () => {
      const expectedUserLists = [
        new User({
          id: 1,
          name: 'Bobbi Ashley                                                                                        ',
          status:
            'Active                                                                                              ',
        }),
        new User({
          id: 2,
          name: 'Sherrie Ashley                                                                                      ',
          status:
            'Active                                                                                              ',
        }),
        new User({
          id: 3,
          name: 'Lela Rosario                                                                                        ',
          status:
            'Inactive                                                                                            ',
        }),
        new User({
          id: 4,
          name: 'Jamal Kirk                                                                                          ',
          status:
            'Active                                                                                              ',
        }),
        new User({
          id: 5,
          name: 'Garry Suarez                                                                                        ',
          status:
            'Inactive                                                                                            ',
        }),
        new User({
          id: 6,
          name: 'Lyman Weber                                                                                         ',
          status:
            'Active                                                                                              ',
        }),
        new User({
          id: 7,
          name: 'Frieda Mooney                                                                                       ',
          status:
            'Active                                                                                              ',
        }),
        new User({
          id: 8,
          name: 'Norman Hunt                                                                                         ',
          status:
            'Inactive                                                                                            ',
        }),
        new User({
          id: 9,
          name: 'Lou Krueger                                                                                         ',
          status:
            'Active                                                                                              ',
        }),
        new User({
          id: 10,
          name: 'Dolores Mathews                                                                                     ',
          status:
            'Active                                                                                              ',
        }),
      ];

      const userLists = await userController.find();

      expect(expectedUserLists).to.deepEqual(userLists);
    });
  });
});
