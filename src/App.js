import UserProfile from './components/UserProfile/UserProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container';

import user from './data/user';
import statisticalData from './data/statistical-data';
import friends from './data/friends';
import items from './data/transactions';

const App = () => {
  return (
    <Container>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title='Upload stats' stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </Container>
  );
};

export default App;
