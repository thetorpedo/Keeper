import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from './firebase';
import Stat from './components/sheet/Stat';
import './App.css';

function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // A consulta correta para ter "HP" em cima é ordenar por nome em ordem descendente.
    const q = query(collection(db, "stats"), orderBy("name", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const statsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStats(statsData);
    });

    // Limpa a inscrição ao desmontar o componente
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {stats.map(stat => (
        <Stat
          key={stat.id}
          id={stat.id}
          name={stat.name}
          value={stat.value}
        />
      ))}
    </div>
  );
}

export default App;
