// "use strict";

class FriendList {
  constructor() {
    this.friends = [];
  }
  add(name, flyingSkill, dejarikSkill, fear) {
    let newFriend = new Friend(name, flyingSkill, dejarikSkill, fear);
    this.friends.push(newFriend);
  }
}

class Friend {
  constructor(name, flyingSkill, dejarikSkill, fear) {
    this.name = name;
    this.flyingSkill = flyingSkill;
    this.dejarikSkill = dejarikSkill;
    this.fear = fear;
    this.friendScore = this.flyingSkill + this.dejarikSkill + this.fear;
  }
}

const friendList = new FriendList();
friendList.add("Jerry", 2, 5, 10);
friendList.add("Colin", 2, 10, 0);
friendList.add("Alicia", 6, 2, 7);
friendList.add("Matt", 8, 5, 1);
friendList.add("Mitch", 3, 6, 4);
friendList.friends.sort((a, b) => {
  return b.friendScore - a.friendScore;
});

console.log(
  friendList.friends.sort((a, b) => {
    return b.friendScore - a.friendScore;
  })
);
