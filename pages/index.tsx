import { motion } from 'framer-motion';
import type { NextPage } from 'next';

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

const menu: MenuItem[] = [
  { name: 'Margherita', description: 'Tomat, mozzarella, basilikum', price: '95 kr' },
  { name: 'Pepperoni', description: 'Tomat, mozzarella, pepperoni', price: '110 kr' },
  { name: 'Special', description: 'Specialtopping of the house', price: '120 kr' },
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <motion.section
        className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-red-600 to-red-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Aladdin Grill Esbjerg</h1>
        <p className="mt-4 text-xl">Premium Grill, Kebab & Pizza in Esbjerg</p>
      </motion.section>

      {/* Menu */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-6">Menu</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {menu.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-4 border rounded-lg shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="mt-2 font-semibold">{item.price}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <motion.button
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call to Order
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
