const WEEK2 = [
{
  day: 8,
  title: { en: `Random Variables`, zh: `随机变量` },
  content: {
    en: `<p>A <strong>random variable</strong> is just a number whose value depends on the outcome of something uncertain. Roll a die: the random variable X is "the number shown," which could be 1 through 6. A startup's random variable might be "monthly recurring revenue next quarter," which could take many values.</p>
    <p>Random variables come in two flavors. <strong>Discrete</strong> random variables take countable values (number of customers who churn this month: 0, 1, 2, ...). <strong>Continuous</strong> random variables take any value in a range (the exact time until a server crashes).</p>
    <p>Once you frame a quantity you care about as a random variable, you unlock a whole toolkit: you can describe its distribution (which values are likely), its expected value (Day 9), and its spread (Day 10) — instead of just guessing a single number.</p>`,
    zh: `<p><strong>随机变量</strong>就是一个数值，它的具体取值取决于某个不确定事件的结果。掷一枚骰子：随机变量X就是"掷出的点数"，可能是1到6中的任意一个。一家创业公司的随机变量可能是"下个季度的月度经常性收入"，它可以取很多不同的值。</p>
    <p>随机变量分为两类。<strong>离散型</strong>随机变量的取值是可数的（这个月流失的客户数：0、1、2……）。<strong>连续型</strong>随机变量可以在一个区间内取任意值（服务器崩溃前的确切时间）。</p>
    <p>一旦你把自己关心的量看作一个随机变量，你就能用一整套工具去分析它：描述它的分布（哪些值更可能出现）、它的期望值（第9天会讲）、以及它的离散程度（第10天会讲）——而不是只凭直觉猜一个数字。</p>`
  },
  example: {
    en: `<p>Instead of asking "how many customers will we get next month?" (a single guess), a sharp operator asks "what's the full distribution of possible customer counts?" — maybe 60% chance of 80-100 customers, 25% chance of 100-120, 15% chance of under 80. That distribution is far more useful for planning inventory or staffing than a single-point forecast.</p>`,
    zh: `<p>与其问"下个月我们能获得多少新客户？"（只给一个猜测值），精明的运营者会问"新客户数量的完整分布是什么？"——也许有60%的概率落在80-100人，25%的概率在100-120人，15%的概率低于80人。这样的分布信息，在做库存或人力规划时，远比一个单点预测有用得多。</p>`
  },
  takeaway: {
    en: `Stop forecasting a single number. Start forecasting a distribution of possible numbers and how likely each is.`,
    zh: `不要只预测一个单一数字，而要预测一个可能取值的分布，以及每个取值的可能性。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Which of these is a discrete random variable?`, zh: `以下哪一个是离散型随机变量？` },
      options: [
        { en: `The exact height of a customer`, zh: `某位顾客的精确身高` },
        { en: `The number of support tickets filed this week`, zh: `本周提交的客服工单数量` },
        { en: `The time until a machine fails`, zh: `机器发生故障前经过的时间` },
        { en: `Tomorrow's temperature`, zh: `明天的气温` }
      ],
      answer: 1,
      explanation: { en: `Ticket counts are countable whole numbers (0, 1, 2, ...) — the defining feature of a discrete random variable. The others can take any value in a range.`, zh: `工单数量是可数的整数（0、1、2……）——这正是离散型随机变量的特征。其他选项都可以在某个区间内取任意值，属于连续型。` }
    },
    {
      type: "mcq",
      question: { en: `A random variable is best described as:`, zh: `随机变量最准确的定义是：` },
      options: [
        { en: `A fixed constant that never changes`, zh: `一个永远不变的固定常数` },
        { en: `A number whose value depends on the outcome of an uncertain event`, zh: `一个数值，其取值取决于某个不确定事件的结果` },
        { en: `A value that is always between 0 and 1`, zh: `一个总是介于0和1之间的值` },
        { en: `Something only used in dice games`, zh: `只用于骰子游戏中的概念` }
      ],
      answer: 1,
      explanation: { en: `That's the general definition — it applies to revenue, churn, wait times, or anything uncertain, not just games.`, zh: `这是通用定义——它适用于收入、流失率、等待时间等任何不确定的量，而不仅仅是游戏。` }
    },
    {
      type: "short",
      question: { en: `True or False: Continuous random variables can take any value within a range.`, zh: `判断对错：连续型随机变量可以在某个区间内取任意值。` },
      answer: "true",
      explanation: { en: `True — unlike discrete variables, continuous ones aren't restricted to countable values.`, zh: `正确——与离散型变量不同，连续型变量不局限于可数的取值。` }
    }
  ]
},
{
  day: 9,
  title: { en: `Expected Value: The Long-Run Average`, zh: `期望值：长期平均结果` },
  content: {
    en: `<p>The <strong>expected value</strong> (mean) of a random variable is the weighted average of all its possible outcomes, where the weights are the probabilities. It answers: "if I could repeat this situation many times, what would the average result be?"</p>
    <div class="formula">E(X) = Σ [x × P(x)]</div>
    <p>Expected value is arguably the single most useful number in decision-making under uncertainty. A bet, an investment, or a business decision with a positive expected value will, on average, pay off over many repetitions — even if any single instance loses.</p>
    <p>Casinos, insurance companies, and venture capital funds all run on this principle: they don't need every individual bet to win, they need the expected value across many bets to be positive.</p>`,
    zh: `<p>随机变量的<strong>期望值</strong>（均值）是所有可能结果的加权平均，权重就是各自的概率。它回答的问题是："如果这个情境可以重复很多次，平均结果会是多少？"</p>
    <div class="formula">E(X) = Σ [x × P(x)]</div>
    <p>在不确定性下做决策时，期望值可能是最有用的单一数字。一笔赌注、一项投资或一个商业决策，只要期望值为正，在多次重复之后平均来看就会是盈利的——即使某一次单独的结果是亏损的。</p>
    <p>赌场、保险公司和风险投资基金都是基于这个原理运作的：它们不需要每一笔投注都赢，只需要在大量投注中，整体的期望值为正即可。</p>`
  },
  example: {
    en: `<p>A VC fund invests in 20 startups. 17 return $0, 2 return 3x the investment, and 1 returns 50x. Even though 85% of bets "fail," the expected value per dollar invested is strongly positive — this is why venture capital is a portfolio game, not a per-company prediction game.</p>`,
    zh: `<p>一支风投基金投资了20家创业公司。其中17家最终归零，2家带来3倍回报，1家带来50倍回报。尽管85%的投资"失败"了，但每投入一美元的期望值仍然是明显为正的——这正是为什么风险投资是一场投资组合的游戏，而不是针对单一公司的预测游戏。</p>`
  },
  takeaway: {
    en: `A decision can have a positive expected value even if it "loses" most of the time. Judge repeatable decisions by expected value, not by any single outcome.`,
    zh: `即使大多数时候都"输"，一个决策仍然可以拥有正的期望值。对于可重复的决策，应该用期望值来评判，而不是看单次结果。`
  },
  exercises: [
    {
      type: "numeric",
      question: { en: `A game pays $10 with probability 0.2, and $0 otherwise. What is the expected value?`, zh: `一个游戏有0.2的概率获得10美元，否则获得0美元。期望值是多少？` },
      answer: "2",
      explanation: { en: `E(X) = 10 × 0.2 + 0 × 0.8 = 2.`, zh: `E(X) = 10 × 0.2 + 0 × 0.8 = 2。` }
    },
    {
      type: "numeric",
      question: { en: `An investment returns $100 with 30% probability, and loses $20 with 70% probability. What is the expected value?`, zh: `一项投资有30%的概率获得100美元收益，70%的概率亏损20美元。期望值是多少？` },
      answer: "16",
      explanation: { en: `E(X) = 0.3 × 100 + 0.7 × (−20) = 30 − 14 = 16.`, zh: `E(X) = 0.3 × 100 + 0.7 × (−20) = 30 − 14 = 16。` }
    },
    {
      type: "mcq",
      question: { en: `A VC portfolio can be a good bet even though most startups fail because:`, zh: `即使大多数创业公司都失败了，风投组合仍然可能是一个不错的投注，原因是：` },
      options: [
        { en: `Failure never really happens in venture capital`, zh: `在风险投资中失败其实从不会真正发生` },
        { en: `A few big winners can produce a positive expected value across the whole portfolio`, zh: `少数几个巨大的赢家可以让整个组合的期望值为正` },
        { en: `Expected value doesn't apply to startups`, zh: `期望值不适用于创业公司` },
        { en: `Diversification guarantees no losses`, zh: `分散投资能保证不产生亏损` }
      ],
      answer: 1,
      explanation: { en: `A small number of outsized returns can dominate the average, making the overall expected value positive despite frequent zeros.`, zh: `少数极高的回报可以主导整体平均值，即使大多数投资归零，整体期望值仍可能为正。` }
    }
  ]
},
{
  day: 10,
  title: { en: `Variance and Standard Deviation: Measuring Risk`, zh: `方差与标准差：衡量风险` },
  content: {
    en: `<p>Expected value tells you the average outcome, but says nothing about how much outcomes vary. <strong>Variance</strong> measures the average squared distance of outcomes from the expected value; <strong>standard deviation</strong> is its square root, expressed in the same units as the original data — which makes it easier to interpret as "typical spread."</p>
    <div class="formula">Var(X) = E[(X − E(X))²]      SD(X) = √Var(X)</div>
    <p>Two investments can have the same expected return but wildly different risk. A savings account earning a guaranteed 3% has an expected value of 3% and a standard deviation of 0 (no risk). A startup investment might have an expected return of 3% too, but with a standard deviation of 200% — meaning outcomes could range from total loss to a 10x return.</p>
    <p>In practice, standard deviation is your everyday proxy for "risk" or "uncertainty." Low standard deviation means predictable; high standard deviation means volatile, even if the average looks the same.</p>`,
    zh: `<p>期望值告诉你的是平均结果，但完全没有说明结果的波动有多大。<strong>方差</strong>衡量的是各个结果与期望值之间距离平方的平均值；<strong>标准差</strong>是方差的平方根，单位与原始数据相同——这使它更容易被理解为"典型的波动幅度"。</p>
    <div class="formula">Var(X) = E[(X − E(X))²]      SD(X) = √Var(X)</div>
    <p>两项投资可能拥有相同的期望回报，但风险却天差地别。一个保证3%收益的储蓄账户，期望值是3%，标准差为0（没有风险）。一项创业投资的期望回报可能同样是3%，但标准差却高达200%——这意味着结果可能是血本无归，也可能是10倍回报。</p>
    <p>在实践中，标准差就是我们日常所说"风险"或"不确定性"的量化替代指标。标准差低意味着可预测；标准差高意味着波动剧烈，即使平均值看起来相同。</p>`
  },
  example: {
    en: `<p>Two job offers both have an "expected" annual bonus of $10,000. Offer A is a fixed $10,000 bonus (standard deviation = $0). Offer B is a 50% chance of $0 and 50% chance of $20,000 (standard deviation ≈ $10,000). Someone with a mortgage due next month cares enormously about that difference in standard deviation, even though the expected values are identical.</p>`,
    zh: `<p>两份工作邀约的"期望"年终奖都是10万元。A邀约是固定10万元奖金（标准差=0）。B邀约则是50%的概率拿到0元，50%的概率拿到20万元（标准差约为10万元）。对于一个下个月就要还房贷的人来说，即使两者的期望值完全相同，这个标准差的差异也至关重要。</p>`
  },
  takeaway: {
    en: `Never evaluate a decision on expected value alone. Always ask about the spread (standard deviation) too — it tells you how much you could deviate from the average.`,
    zh: `永远不要只用期望值来评估一个决策，一定要同时问一问波动幅度（标准差）——它告诉你实际结果可能偏离平均值多远。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Standard deviation is best understood as a measure of:`, zh: `标准差最适合被理解为衡量什么的指标？` },
      options: [
        { en: `The average outcome`, zh: `平均结果` },
        { en: `The typical spread or risk around the average`, zh: `围绕平均值的典型波动幅度或风险` },
        { en: `The probability of success`, zh: `成功的概率` },
        { en: `The size of the sample space`, zh: `样本空间的大小` }
      ],
      answer: 1,
      explanation: { en: `Standard deviation quantifies how far typical outcomes stray from the mean — the everyday meaning of "risk."`, zh: `标准差量化的是典型结果偏离均值的程度——这正是日常语境中"风险"的含义。` }
    },
    {
      type: "mcq",
      question: { en: `Two investments have the same expected return. Investment A has SD = $0, Investment B has SD = $50,000. Which is riskier?`, zh: `两项投资的期望回报相同。投资A的标准差为0，投资B的标准差为5万美元。哪个风险更高？` },
      options: [
        { en: `Investment A`, zh: `投资A` },
        { en: `Investment B`, zh: `投资B` }
      ],
      answer: 1,
      explanation: { en: `Higher standard deviation means more variability around the expected outcome — Investment B is riskier despite the identical average.`, zh: `标准差越高，围绕期望结果的波动就越大——尽管平均值相同，投资B的风险更高。` }
    },
    {
      type: "short",
      question: { en: `True or False: Two outcomes can have the same expected value but very different risk.`, zh: `判断对错：两个结果可能拥有相同的期望值，但风险却截然不同。` },
      answer: "true",
      explanation: { en: `True — this is exactly why you need both expected value and standard deviation to evaluate a decision.`, zh: `正确——这正是为什么评估一个决策时，既需要期望值，也需要标准差。` }
    }
  ]
},
{
  day: 11,
  title: { en: `The Binomial Distribution: Counting Successes`, zh: `二项分布：统计成功次数` },
  content: {
    en: `<p>The <strong>binomial distribution</strong> models the number of "successes" in a fixed number of independent trials, each with the same probability of success p. Think: number of heads in 10 coin flips, number of converting customers out of 100 site visitors, number of successful A/B test variants out of 5 tried.</p>
    <div class="formula">E(X) = n × p       SD(X) = √(n × p × (1−p))</div>
    <p>The key requirements are: a fixed number of trials (n), each trial independent, only two outcomes per trial (success/failure), and the same probability (p) each time. If those assumptions hold even approximately, the binomial distribution lets you estimate not just the expected number of successes, but a realistic range around it.</p>
    <p>This is hugely practical: if your checkout conversion rate is 3%, and you get 1,000 visitors, the expected number of conversions is 30 — but the binomial distribution also tells you the plausible range (roughly 20-40) so you don't panic over normal week-to-week noise.</p>`,
    zh: `<p><strong>二项分布</strong>用来描述在固定次数的独立试验中，"成功"次数的分布，每次试验成功的概率都相同，记为p。比如：投掷10次硬币中正面朝上的次数、100个访客中转化的客户数、5次A/B测试中成功的变体数。</p>
    <div class="formula">E(X) = n × p       SD(X) = √(n × p × (1−p))</div>
    <p>使用二项分布的关键前提是：固定的试验次数（n）、每次试验相互独立、每次试验只有两种结果（成功/失败），并且每次成功的概率（p）相同。只要这些假设大致成立，二项分布就能帮你估算出不仅是预期的成功次数，还有围绕它的合理波动范围。</p>
    <p>这在实践中非常实用：如果你的结账转化率是3%，网站有1000名访客，预期转化数是30——但二项分布还能告诉你合理的波动范围（大约在20到40之间），这样你就不会因为某一周的正常波动而恐慌。</p>`
  },
  example: {
    en: `<p>A sales rep closes deals at a historical rate of 25%. This month they made 40 pitches. Expected closes: 40 × 0.25 = 10. Standard deviation: √(40 × 0.25 × 0.75) ≈ 2.7. So closing anywhere from about 7 to 13 deals is entirely normal variation — closing only 6 or 7 isn't necessarily a sign the rep is slipping.</p>`,
    zh: `<p>一位销售历史成单率为25%。这个月他做了40次推销。预期成单数：40 × 0.25 = 10。标准差：√(40 × 0.25 × 0.75) ≈ 2.7。所以成单数落在大约7到13之间都属于正常波动——只成交6、7单，并不一定说明这位销售的表现在下滑。</p>`
  },
  takeaway: {
    en: `Before judging any "count of successes" as good or bad, compute the expected value AND standard deviation from the binomial distribution — most week-to-week swings are just noise.`,
    zh: `在评判任何"成功次数"是好是坏之前，先用二项分布算出期望值和标准差——大多数周期性的波动其实只是噪音。`
  },
  exercises: [
    {
      type: "numeric",
      question: { en: `A website converts visitors at a 5% rate. Out of 200 visitors, what is the expected number of conversions?`, zh: `某网站的访客转化率为5%。200名访客中，预期转化数是多少？` },
      answer: "10",
      explanation: { en: `E(X) = n × p = 200 × 0.05 = 10.`, zh: `E(X) = n × p = 200 × 0.05 = 10。` }
    },
    {
      type: "mcq",
      question: { en: `Which scenario is NOT a good fit for the binomial distribution?`, zh: `以下哪种情况不适合用二项分布来建模？` },
      options: [
        { en: `Number of heads in 20 independent coin flips`, zh: `20次独立掷硬币中正面朝上的次数` },
        { en: `Number of days it rains this week, when the daily probability changes and days are correlated`, zh: `本周下雨的天数，其中每天下雨概率会变化且各天相关` },
        { en: `Number of correct answers on a 10-question true/false quiz answered by random guessing`, zh: `随机猜测作答的10道判断题中答对的题数` },
        { en: `Number of customers, out of 50 independent calls, who agree to a demo`, zh: `50次独立电话中同意预约演示的客户数` }
      ],
      answer: 1,
      explanation: { en: `Binomial requires a constant probability per trial and independence — changing daily probabilities and correlated days violate both assumptions.`, zh: `二项分布要求每次试验的概率恒定且相互独立——每日概率变化、天数之间存在相关性，违反了这两个假设。` }
    },
    {
      type: "short",
      question: { en: `True or False: The binomial distribution requires each trial to be independent with the same probability of success.`, zh: `判断对错：二项分布要求每次试验相互独立，且成功概率相同。` },
      answer: "true",
      explanation: { en: `True — these are two of its core assumptions, along with a fixed number of trials.`, zh: `正确——这是二项分布的核心假设之一，此外还要求试验次数固定。` }
    }
  ]
},
{
  day: 12,
  title: { en: `The Poisson Distribution: Rare Events`, zh: `泊松分布：稀有事件` },
  content: {
    en: `<p>The <strong>Poisson distribution</strong> models the number of events happening in a fixed window of time or space, when events occur independently at some average rate λ (lambda). Think: number of customer support tickets per hour, number of server crashes per month, number of typos per page.</p>
    <div class="formula">E(X) = λ       SD(X) = √λ</div>
    <p>Unlike the binomial distribution, there's no fixed "number of trials" — events could in theory happen any number of times, but rare ones are far more likely than common ones once you're above the average rate. The Poisson distribution is the natural choice whenever you're counting "how many rare-ish events happen in this time period."</p>
    <p>A crucial insight: because SD = √λ, low-rate events are proportionally noisier. If your average is 4 support tickets/day, a day with 8 (double!) isn't necessarily alarming — the standard deviation is only 2, so 8 is "just" two standard deviations away, which happens more often than people intuitively expect.</p>`,
    zh: `<p><strong>泊松分布</strong>用来描述在固定的时间或空间窗口内，独立发生的事件数量，这些事件以某个平均速率λ（读作lambda）发生。比如：每小时的客服工单数、每月的服务器崩溃次数、每页的错别字数量。</p>
    <div class="formula">E(X) = λ       SD(X) = √λ</div>
    <p>与二项分布不同，泊松分布没有固定的"试验次数"——理论上事件可以发生任意多次，但一旦超过平均速率，发生次数越多的可能性就越低。只要你在统计"某个时间段内发生了多少次较为罕见的事件"，泊松分布通常都是最自然的选择。</p>
    <p>一个关键的洞察是：由于标准差 = √λ，发生率越低的事件，相对波动就越大。如果你平均每天有4个客服工单，某天突然出现8个（翻倍！）并不一定值得警惕——标准差只有2，所以8只是"仅仅"偏离了两个标准差，这种情况发生的频率比人们直觉认为的要高。</p>`
  },
  example: {
    en: `<p>A SaaS company averages 3 critical bugs reported per week (λ=3). One week they get 7 reports and the team panics, assuming a major regression. But with SD=√3≈1.7, seeing 7 is only about 2.3 standard deviations out — unusual, but not the "five-alarm fire" it might feel like. It's worth investigating, but not necessarily a sign the whole release process failed.</p>`,
    zh: `<p>一家SaaS公司平均每周收到3个严重bug报告（λ=3）。某一周突然收到7个报告，团队立刻恐慌，以为出现了重大回归问题。但标准差 √3≈1.7，7这个数字大约只偏离了2.3个标准差——虽然不常见，但并没有想象中那么"火烧眉毛"。这值得调查，但不一定意味着整个发布流程都出了问题。</p>`
  },
  takeaway: {
    en: `When counting rare events per time period, expect natural spikes proportional to √λ. Don't overreact to a single high week without checking whether it's within normal Poisson variation.`,
    zh: `在统计单位时间内的稀有事件数量时，要预期到与√λ成比例的自然波动。在某一周数值偏高时，先检查它是否仍在泊松分布的正常波动范围内，不要过度反应。`
  },
  exercises: [
    {
      type: "numeric",
      question: { en: `A store's average number of returns per day is λ=9. What is the standard deviation?`, zh: `某商店每天平均退货数为λ=9。标准差是多少？` },
      answer: "3",
      explanation: { en: `SD = √λ = √9 = 3.`, zh: `标准差 = √λ = √9 = 3。` }
    },
    {
      type: "mcq",
      question: { en: `The Poisson distribution is most appropriate for modeling:`, zh: `泊松分布最适合用来建模以下哪种情况？` },
      options: [
        { en: `Pass/fail outcomes on an exam`, zh: `考试的通过/未通过结果` },
        { en: `The number of rare, independent events in a fixed time window`, zh: `固定时间窗口内发生的稀有独立事件数量` },
        { en: `The height of adult males`, zh: `成年男性的身高` },
        { en: `The outcome of a fixed number of coin flips`, zh: `固定次数掷硬币的结果` }
      ],
      answer: 1,
      explanation: { en: `That's exactly the Poisson setup — counting rare, independent occurrences within a set window.`, zh: `这正是泊松分布的典型场景——统计固定窗口内发生的稀有独立事件数量。` }
    },
    {
      type: "short",
      question: { en: `True or False: In a Poisson distribution, the expected value and variance are both equal to λ.`, zh: `判断对错：在泊松分布中，期望值和方差都等于λ。` },
      answer: "true",
      explanation: { en: `True — a distinctive property of the Poisson distribution.`, zh: `正确——这是泊松分布的一个显著特性。` }
    }
  ]
},
{
  day: 13,
  title: { en: `The Normal Distribution: The Bell Curve`, zh: `正态分布：钟形曲线` },
  content: {
    en: `<p>The <strong>normal distribution</strong> (bell curve) is the most famous distribution in statistics, describing data that clusters symmetrically around a mean, with most values falling close to it and fewer values far away. Human heights, measurement errors, and — thanks to the Central Limit Theorem (tomorrow's topic) — the sum or average of many independent effects, all tend to look normal.</p>
    <div class="formula">~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD of the mean</div>
    <p>This "68-95-99.7 rule" is one of the most practically useful facts in all of probability. It lets you eyeball, from just a mean and standard deviation, roughly how unusual any given value is — without doing a full calculation.</p>
    <p>Be careful, though: not everything is normally distributed. Wealth, city populations, and viral content views are typically "fat-tailed" (Day 27), where extreme outliers are far more common than a normal distribution would predict.</p>`,
    zh: `<p><strong>正态分布</strong>（钟形曲线）是统计学中最著名的分布，它描述的数据对称地聚集在均值附近，大多数值都靠近均值，远离均值的值则较少。人的身高、测量误差，以及——得益于明天要讲的中心极限定理——许多独立因素的加总或平均，往往都近似服从正态分布。</p>
    <div class="formula">约68%落在1个标准差内，约95%落在2个标准差内，约99.7%落在3个标准差内</div>
    <p>这条"68-95-99.7法则"是整个概率论中最实用的经验法则之一。只需知道均值和标准差，你就能大致判断某个具体数值有多"不寻常"，而无需进行完整的计算。</p>
    <p>不过要小心：并不是所有事物都服从正态分布。财富分布、城市人口规模、内容的病毒式传播量，通常都是"厚尾"分布（第27天会讲），极端的离群值远比正态分布预测的要常见得多。</p>`
  },
  example: {
    en: `<p>Your team's average deal size is $5,000 with a standard deviation of $1,000. A rep closes a single $8,000 deal. That's 3 standard deviations above the mean — a genuinely rare, worth-celebrating (or worth-double-checking) event, not just "a good month." The 68-95-99.7 rule lets you make that call at a glance.</p>`,
    zh: `<p>你的团队平均订单金额是5000元，标准差为1000元。某位销售成交了一笔8000元的订单。这已经比均值高出3个标准差——这是一个真正罕见、值得庆祝（或者值得复核）的事件，而不只是"业绩不错的一个月"。有了68-95-99.7法则，你一眼就能做出这个判断。</p>`
  },
  takeaway: {
    en: `Memorize 68-95-99.7. Given a mean and standard deviation, you can instantly judge whether any observed value is normal or genuinely surprising.`,
    zh: `记住68-95-99.7法则。只要有均值和标准差，你就能立刻判断某个观察值究竟是正常波动，还是真正值得关注的异常。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Approximately what percentage of a normal distribution falls within 2 standard deviations of the mean?`, zh: `在正态分布中，大约有百分之多少的数据落在均值的2个标准差范围内？` },
      options: [
        { en: `50%`, zh: `50%` },
        { en: `68%`, zh: `68%` },
        { en: `95%`, zh: `95%` },
        { en: `99.99%`, zh: `99.99%` }
      ],
      answer: 2,
      explanation: { en: `That's the middle figure in the 68-95-99.7 rule.`, zh: `这正是68-95-99.7法则中的中间数值。` }
    },
    {
      type: "mcq",
      question: { en: `Which of these is LEAST likely to be normally distributed?`, zh: `以下哪一项最不可能服从正态分布？` },
      options: [
        { en: `Heights of adult women`, zh: `成年女性的身高` },
        { en: `Measurement errors from a lab instrument`, zh: `实验室仪器的测量误差` },
        { en: `Individual wealth across a whole country`, zh: `一个国家中个人财富的分布` },
        { en: `Scores on a well-designed standardized exam`, zh: `一场设计合理的标准化考试的得分` }
      ],
      answer: 2,
      explanation: { en: `Wealth is famously fat-tailed — a small number of extremely wealthy individuals skew it far from a symmetric bell curve.`, zh: `财富分布以厚尾著称——少数极端富有的个体，会让分布严重偏离对称的钟形曲线。` }
    },
    {
      type: "short",
      question: { en: `True or False: A value 3 standard deviations from the mean is considered common in a normal distribution.`, zh: `判断对错：在正态分布中，偏离均值3个标准差的值是很常见的。` },
      answer: "false",
      explanation: { en: `False — only about 0.3% of values fall beyond 3 standard deviations, making it a rare event.`, zh: `错误——只有大约0.3%的数值会超出3个标准差，这属于罕见事件。` }
    }
  ]
},
{
  day: 14,
  title: { en: `Law of Large Numbers & Central Limit Theorem`, zh: `大数定律与中心极限定理` },
  content: {
    en: `<p>The <strong>Law of Large Numbers</strong> says that as you repeat a random process more and more times, the average of your observed results converges to the true expected value. Flip a coin 10 times and you might see 70% heads; flip it 10,000 times and you'll be very close to 50%.</p>
    <p>The <strong>Central Limit Theorem (CLT)</strong> is even more powerful: it says that the average (or sum) of many independent random variables — no matter what their individual distributions look like — tends toward a normal distribution as the number of variables grows. This is why the normal distribution shows up everywhere, even for quantities built from very non-normal ingredients.</p>
    <div class="formula">Small samples are noisy. Large samples converge to the truth (LLN) and their averages look normal (CLT).</div>
    <p>Together these two ideas explain why small samples lie to you — a 5-star review average from 3 customers means almost nothing, while an average from 3,000 customers is trustworthy — and why so many business metrics, when averaged across enough users, end up looking bell-shaped.</p>`,
    zh: `<p><strong>大数定律</strong>指出，随着一个随机过程重复的次数越来越多，观察结果的平均值会逐渐收敛到真实的期望值。掷10次硬币，你可能看到70%是正面；但掷10000次，结果会非常接近50%。</p>
    <p><strong>中心极限定理</strong>则更加强大：它指出，无论单个随机变量本身服从什么分布，只要独立随机变量的数量足够多，它们的平均值（或总和）的分布都会趋近于正态分布。这也是为什么正态分布几乎无处不在，即使构成它的原始数据一点也不"正态"。</p>
    <div class="formula">小样本充满噪音；大样本会收敛到真实值（大数定律），且其平均值趋于正态分布（中心极限定理）。</div>
    <p>这两个原理共同解释了为什么小样本容易"骗人"——只有3位顾客打出的五星好评平均分几乎没有参考意义，而来自3000位顾客的平均分则值得信赖——也解释了为什么许多商业指标，只要在足够多的用户上取平均，最终都会呈现出钟形分布。</p>`
  },
  example: {
    en: `<p>A new restaurant has 4 reviews averaging 5 stars. It looks perfect — but the Law of Large Numbers warns you this could easily regress toward a lower true average as more reviews arrive. A competitor with 1,200 reviews averaging 4.3 stars is a far more trustworthy signal, even though its number looks "worse" on the surface.</p>`,
    zh: `<p>一家新开的餐厅只有4条评价，平均5星，看起来完美无缺——但大数定律提醒你，随着评价数量增多，这个平均分很可能会向更低的真实水平回归。而一家有1200条评价、平均4.3星的竞争对手，反而是一个更值得信赖的信号，尽管表面上这个数字"看起来更差"。</p>`
  },
  takeaway: {
    en: `Distrust averages from small samples — they haven't converged yet. The Law of Large Numbers only kicks in with enough repetitions.`,
    zh: `不要轻信小样本得出的平均值——它们还没有收敛。大数定律只有在重复次数足够多时才会生效。`
  },
  exercises: [
    {
      type: "mcq",
      question: { en: `Which average is most trustworthy, according to the Law of Large Numbers?`, zh: `根据大数定律，以下哪个平均分最值得信赖？` },
      options: [
        { en: `5.0 stars from 3 reviews`, zh: `来自3条评价的5.0星` },
        { en: `4.2 stars from 5,000 reviews`, zh: `来自5000条评价的4.2星` },
        { en: `4.9 stars from 8 reviews`, zh: `来自8条评价的4.9星` },
        { en: `They are all equally trustworthy`, zh: `三者同样值得信赖` }
      ],
      answer: 1,
      explanation: { en: `With far more observations, this average has converged much closer to the true underlying rating.`, zh: `由于观察样本量大得多，这个平均分更接近真实的潜在评分水平。` }
    },
    {
      type: "mcq",
      question: { en: `The Central Limit Theorem explains why:`, zh: `中心极限定理解释了为什么：` },
      options: [
        { en: `All individual data points are normally distributed`, zh: `所有单个数据点都服从正态分布` },
        { en: `Sums or averages of many independent variables tend toward a normal distribution`, zh: `许多独立变量的总和或平均值趋向于正态分布` },
        { en: `Rare events never happen`, zh: `稀有事件永远不会发生` },
        { en: `Probabilities must sum to 1`, zh: `概率之和必须为1` }
      ],
      answer: 1,
      explanation: { en: `The CLT is about the distribution of sums/averages, not individual raw data points.`, zh: `中心极限定理描述的是总和或平均值的分布，而不是单个原始数据点的分布。` }
    },
    {
      type: "short",
      question: { en: `True or False: Small samples tend to show more extreme averages than large samples.`, zh: `判断对错：与大样本相比，小样本往往会呈现出更极端的平均值。` },
      answer: "true",
      explanation: { en: `True — with fewer observations, a single unusual data point can swing the average dramatically.`, zh: `正确——观察样本越少，单个异常数据点就越容易大幅拉动平均值。` }
    }
  ]
}
];
