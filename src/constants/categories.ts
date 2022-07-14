const CATEGORIES = {
  react: 'react',
  angular: 'angular',
  node: 'node',
  mongodb: 'mongodb',
  postgres: 'postgres',
};

type Category = keyof typeof CATEGORIES;

export type { Category };
export {
  CATEGORIES,
}
