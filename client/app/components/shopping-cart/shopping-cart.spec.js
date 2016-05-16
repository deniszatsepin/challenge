import ShoppingCartModule from './shopping-cart'
import ShoppingCartController from './shopping-cart.controller';
import ShoppingCartComponent from './shopping-cart.component';
import ShoppingCartTemplate from './shopping-cart.html';

describe('ShoppingCart', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShoppingCartModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShoppingCartController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ShoppingCartTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShoppingCartComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShoppingCartTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShoppingCartController);
      });
  });
});
