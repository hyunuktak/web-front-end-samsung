import { number } from 'prop-types';
import CartTotal from './CartTotal';

import { useCart } from './../../contexts/CartContext';

const CartFooter = ({ ...restProps }) => {
  const { totalPrice: total } = useCart();
  return (
  <footer {...restProps}>
    <CartTotal>{total}</CartTotal>
  </footer>);
};

CartFooter.propTypes = {
  total: number.isRequired,
};

export default CartFooter;
