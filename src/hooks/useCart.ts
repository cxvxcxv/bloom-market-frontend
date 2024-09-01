import { useQuery } from '@tanstack/react-query';

import { CartService } from '@/services/cart.service';

export function useCart() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['cart'],
    queryFn: () => CartService.getCart(),
  });

  return { data, isLoading, isSuccess };
}
