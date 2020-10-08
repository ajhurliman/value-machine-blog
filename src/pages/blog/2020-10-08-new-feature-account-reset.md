---
templateKey: blog-post
title: "New feature: Account reset"
date: 2020-10-08T16:10:45.793Z
description: Wanna start with a fresh account? We got you fam
featuredpost: true
featuredimage: /img/reset_acct.png
tags:
  - features
---
![](/img/reset_acct.png)



Hey everyone,

We've got a bunch of new features in the pipeline, and we recently released one that unblocks some other features: Resetting your account.

If you don't have any open positions, the reset button on your profile page becomes active and you can reset your account back to $100,000 and without any positions.

When you reset it we're not just deleting everything, it just gets archived so you'll still have a history of your old accounts (all the trades you made and the cash in your account), you just can't view them right now because we haven't come up with designs/ written the code to view it yet. But rest assured, it's all still in the database for when we get to it.\
\
The end goal here is to be able to get a daily leaderboard for who has the best portfolio valuation at the end of each day, which sounds completely different, but it's strangely related to resetting accounts.\
\
You may have noticed that you can expose yourself to an unlimited amount of risk: You can sell as many naked options as you want, you can short a stock without needing the cash to cover yourself if it goes up, and if it does there are no margin calls. And why not? Fuck it, this is fake money, do what you want to do with it. If you want to YOLO obscene amounts of fake money into FD's, how petty would we be to tell you you're not allowed it?\
\
On the other hand, there's no point to a leaderboard where someone just trivially exposes themselves to more risk than they reasonably could, that's just a competition of who can type in a bigger number. 

So we're working on adding a designation to your account to make it "realistic" so that you can only trade within the reasonable bounds (probably something equivalent to a level 2-3 trader which I'm assuming most of you guys are able to get at a real brokerage).

*However*, there's no point in comparing accounts that have been in "realistic mode" for half the time, and unlimited liability the other half, so first we needed to make the account reset happen.

And the caveat to the "realistic mode" is that once you're limited by the liability you can expose yourself to, it becomes a hassle to enter into a bunch of positions (e.g. if you wanted to buy a debit call spread and didn't have the cash to buy the lower strike call, even though you *did* have the cash to buy the spread if you bought/ sold the pair simultaneously.

So to make the leaderboard, we need realistic mode, to make realistic mode, we need multi-leg options and account reset.\
\
Tl;dr - We're releasing these features in order with the end goal to get a daily leaderboard:\

1. Reset account (done!)\
2. Multi-leg options (in progress)
3. Option to create a new account in "realistic mode" when you reset your account (in progress)
4. Daily leaderboard

We'll keep you updated as things roll out, good luck with those tendies in the meantime ✌🏻