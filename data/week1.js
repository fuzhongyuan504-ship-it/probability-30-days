const WEEK1 = [
{
  day: 1,
  title: { en: "What Is Probability?", zh: "什么是概率？" },
  content: {
    en: `<p>Probability is a number between 0 and 1 (or 0% to 100%) that measures how likely an event is to happen. A probability of 0 means "impossible," 1 means "certain," and everything in between measures degrees of uncertainty.</p>
    <p>There are two common ways to think about probability. <strong>Frequentist</strong> probability is the long-run proportion of times an event happens if a situation were repeated many times (a fair coin lands heads about 50% of the time over many flips). <strong>Bayesian</strong> probability is a degree of belief given the evidence you currently have ("I think there's a 70% chance this launch succeeds").</p>
    <p>Most everyday decisions — what to wear, whether to fund a startup, whether a stock will rise — use the Bayesian view, because you can't repeat life a thousand times to check the frequency.</p>
    <div class="formula">0 ≤ P(A) ≤ 1</div>
    <p>Learning probability really means learning to replace words like "I'm sure" or "never" with calibrated numbers — and updating those numbers as new evidence arrives.</p>`,
    zh: `<p>概率是一个介于0和1之间（或0%到100%）的数字，用来衡量一件事发生的可能性。概率为0表示"不可能"，为1表示"必然"，中间的数值代表不同程度的不确定性。</p>
    <p>理解概率通常有两种视角。<strong>频率派</strong>概率是指如果一件事重复发生很多次，事件发生的长期比例（比如一枚均匀硬币在多次投掷中大约50%的时间正面朝上）。<strong>贝叶斯派</strong>概率则是基于你目前掌握的证据所形成的信念程度（比如"我认为这次产品发布成功的概率是70%"）。</p>
    <p>我们日常的大多数决策——穿什么衣服、要不要投资一个创业项目、股票会不会上涨——其实都在用贝叶斯视角，因为生活无法重复一千次去验证频率。</p>
    <div class="formula">0 ≤ P(A) ≤ 1</div>
    <p>学习概率论，本质上是学会用经过校准的数字取代"我肯定""绝对不会"这类模糊说法，并随着新证据的出现不断更新这些数字。</p>`
  },
  example: {
    en: `<p>A founder estimates a "70% chance" a new feature increases retention. That's not a guess pulled from thin air — it should be based on user interviews, prior A/B tests, and competitor data. Writing the number down (70%, not just "probably") forces clearer thinking and makes it possible to check later: was I too confident?</p>`,
    zh: `<p>一位创业者估计新功能"有70%的概率"能提升留存率。这个数字不是凭空猜测的，而应基于用户访谈、以往的A/B测试结果和竞品数据。把这个概率明确写下来（是70%，而不是笼统的"大概率"），能倒逼自己想得更清楚，也方便日后复盘：我当时是不是过于自信了？</p>`
  },
  takeaway: {
    en: "Replace vague words like ‘probably’ or ‘unlikely’ with an actual number. It's the first step to thinking clearly under uncertainty.",
    zh: "用具体的数字代替“大概”“不太可能”这类模糊说法，这是在不确定性中清晰思考的第一步。"
  },
  exercises: [
    {
      type: "mcq",
      question: { en: "A forecaster says there's a 20% chance of rain tomorrow. What does this most precisely mean?", zh: "天气预报说明天有20%的概率下雨，这句话最准确的含义是什么？" },
      options: [
        { en: "It definitely will not rain", zh: "明天肯定不会下雨" },
        { en: "In similar conditions, it rains about 20% of the time", zh: "在类似的条件下，大约20%的情况会下雨" },
        { en: "It will rain for 20% of the day", zh: "明天会有20%的时间在下雨" },
        { en: "The forecaster is only 20% confident in their model", zh: "预报员对自己模型只有20%的信心" }
      ],
      answer: 1,
      explanation: { en: "20% describes the long-run frequency (or calibrated belief) of rain given similar conditions — not duration or model confidence.", zh: "20%描述的是在类似条件下下雨的长期频率（或经过校准的信念），而不是下雨持续的时长，也不是预报员对模型的信心。" }
    },
    {
      type: "mcq",
      question: { en: "Which value can NOT be a valid probability?", zh: "以下哪个数值不可能是一个有效的概率？" },
      options: [
        { en: "0", zh: "0" },
        { en: "0.5", zh: "0.5" },
        { en: "1.2", zh: "1.2" },
        { en: "1", zh: "1" }
      ],
      answer: 2,
      explanation: { en: "Probabilities must lie between 0 and 1, inclusive. 1.2 is out of range.", zh: "概率必须介于0和1之间（含端点）。1.2超出了这个范围。" }
    },
    {
      type: "numeric",
      question: { en: "If an event is certain to happen, its probability equals ____ (write as a decimal).", zh: "如果一件事必然会发生，它的概率等于____（请写成小数）。" },
      answer: "1",
      explanation: { en: "Certainty corresponds to a probability of exactly 1.", zh: "必然发生对应的概率恰好是1。" }
    }
  ]
},
{
  day: 2,
  title: { en: "Sample Spaces and Events", zh: "样本空间与事件" },
  content: {
    en: `<p>Before you can compute a probability, you need to define the <strong>sample space</strong> — the set of all possible outcomes of a random situation. Rolling a die has sample space {1,2,3,4,5,6}. A visitor to your website either "converts" or "doesn't convert" — a sample space of two outcomes.</p>
    <p>An <strong>event</strong> is any subset of the sample space you care about — "rolling an even number" is the event {2,4,6}.</p>
    <p>Many real-life probability mistakes come from a badly defined sample space: forgetting an outcome is possible, treating outcomes as equally likely when they aren't, or double counting. Before estimating a probability, always ask: what are ALL the things that could happen here, and are they mutually exclusive?</p>
    <div class="formula">P(A) = (favorable outcomes) / (total outcomes) — only valid when outcomes are equally likely</div>`,
    zh: `<p>在计算概率之前，你首先需要明确<strong>样本空间</strong>——也就是一件随机事情所有可能结果的集合。掷一枚骰子的样本空间是{1,2,3,4,5,6}。一个访问你网站的用户，结果要么"转化"要么"不转化"——这是一个只有两个结果的样本空间。</p>
    <p><strong>事件</strong>是样本空间中你所关心的一个子集——比如"掷出偶数"就是事件{2,4,6}。</p>
    <p>现实中很多概率错误，都源于样本空间没有定义清楚：忽略了某个本来可能发生的结果、把本不等可能的结果当作等可能、或者重复计算了某些情况。在估算概率之前，务必先问自己：这里所有可能发生的情况有哪些？它们之间是否互斥？</p>
    <div class="formula">P(A) = 有利结果数 / 总结果数 —— 仅当各结果等可能时成立</div>`
  },
  example: {
    en: `<p>A product manager assumes only two outcomes for a launch: "huge success" or "total failure." In reality the sample space is much richer — modest success, success in one segment only, success delayed by three months, and so on. Naming the full sample space before forecasting avoids overconfident, binary thinking.</p>`,
    zh: `<p>一位产品经理认为产品发布只有两种结果："大获成功"或"彻底失败"。但现实中的样本空间要丰富得多——比如小幅成功、只在某个细分市场成功、成功但延迟三个月等等。在预测之前先列出完整的样本空间，能避免过度自信的二元思维。</p>`
  },
  takeaway: {
    en: "Always list the full range of possible outcomes first — most real-world probability errors come from an incomplete sample space, not bad math.",
    zh: "永远先列出所有可能结果的完整范围——现实中大多数概率错误，源于样本空间不完整，而不是数学计算错误。"
  },
  exercises: [
    {
      type: "mcq",
      question: { en: "You forecast a new product's first month using only 'succeeds' or 'fails.' What's the main risk?", zh: "你用“成功”或“失败”两种结果来预测一款新产品的第一个月表现，最大的风险是什么？" },
      options: [
        { en: "Nothing — it's a valid sample space", zh: "没有风险——这本来就是有效的样本空间" },
        { en: "It ignores partial/intermediate outcomes, encouraging overconfident binary thinking", zh: "它忽略了中间/部分成功的结果，容易导致过度自信的二元思维" },
        { en: "It makes the math too complex", zh: "它会让数学计算变得过于复杂" },
        { en: "It violates the addition rule", zh: "它违反了加法规则" }
      ],
      answer: 1,
      explanation: { en: "Real outcomes usually form a spectrum. Collapsing them into two extremes hides the most likely scenarios.", zh: "真实的结果通常是一个连续的区间。把它压缩成两个极端，会掩盖最可能发生的情况。" }
    },
    {
      type: "mcq",
      question: { en: "A fair six-sided die is rolled once. What is the event 'rolling a number greater than 4'?", zh: "掷一次均匀的六面骰子，“掷出大于4的数字”这个事件是什么？" },
      options: [
        { en: "{5, 6}", zh: "{5, 6}" },
        { en: "{4, 5, 6}", zh: "{4, 5, 6}" },
        { en: "{1, 2, 3}", zh: "{1, 2, 3}" },
        { en: "{6}", zh: "{6}" }
      ],
      answer: 0,
      explanation: { en: "Greater than 4 means strictly more than 4, so only 5 and 6 qualify.", zh: "大于4是指严格大于4，所以只有5和6符合条件。" }
    },
    {
      type: "numeric",
      question: { en: "A bag has 3 red and 2 blue balls, equally likely to be drawn. What is P(red) as a decimal?", zh: "一个袋子里有3个红球和2个蓝球，抽到每个球的概率相等。P(红球)是多少（写成小数）？" },
      answer: "0.6",
      explanation: { en: "3 favorable outcomes out of 5 total: 3/5 = 0.6.", zh: "5个结果中有3个是有利结果：3/5 = 0.6。" }
    }
  ]
},
{
  day: 3,
  title: { en: "The Addition and Complement Rules", zh: "加法规则与补集规则" },
  content: {
    en: `<p>Two rules let you combine simple probabilities into more useful ones.</p>
    <p><strong>Complement rule:</strong> the probability an event does NOT happen is 1 minus the probability it does. This is often the fastest route to an answer — instead of calculating "at least one," calculate "none" and subtract from 1.</p>
    <div class="formula">P(not A) = 1 − P(A)</div>
    <p><strong>Addition rule:</strong> for two events, P(A or B) = P(A) + P(B) − P(A and B). We subtract the overlap so outcomes belonging to both events aren't double-counted.</p>
    <div class="formula">P(A or B) = P(A) + P(B) − P(A and B)</div>
    <p>If A and B can never happen together (mutually exclusive), the overlap is zero and you can simply add the probabilities.</p>`,
    zh: `<p>有两个规则可以把简单的概率组合成更实用的结论。</p>
    <p><strong>补集规则：</strong>某事件不发生的概率，等于1减去它发生的概率。这通常是最快的解题方式——与其计算"至少发生一次"，不如计算"一次都不发生"，再用1去减。</p>
    <div class="formula">P(非A) = 1 − P(A)</div>
    <p><strong>加法规则：</strong>对于两个事件，P(A或B) = P(A) + P(B) − P(A且B)。之所以要减去重叠部分，是为了避免同时属于两个事件的结果被重复计算。</p>
    <div class="formula">P(A或B) = P(A) + P(B) − P(A且B)</div>
    <p>如果A和B不可能同时发生（互斥事件），重叠部分为零，此时可以直接把两个概率相加。</p>`
  },
  example: {
    en: `<p>You're launching a product in two markets. P(succeed in Market A) = 0.4, P(succeed in Market B) = 0.5, and P(succeed in both) = 0.2. The probability of succeeding in at least one market is 0.4 + 0.5 − 0.2 = 0.7 — far easier than reasoning about it intuitively.</p>`,
    zh: `<p>你准备在两个市场推出产品。P(在市场A成功) = 0.4，P(在市场B成功) = 0.5，P(两个市场都成功) = 0.2。那么至少在一个市场成功的概率是 0.4 + 0.5 − 0.2 = 0.7——比凭直觉判断要清晰得多。</p>`
  },
  takeaway: {
    en: "When you need 'at least one,' it's usually easier to compute the complement ('none') and subtract from 1.",
    zh: "当你需要计算“至少一个”时，通常算“一个都没有”的补集，再用1减去会更简单。"
  },
  exercises: [
    {
      type: "numeric",
      question: { en: "P(rain today) = 0.3. What is P(no rain today)?", zh: "P(今天下雨) = 0.3。那么P(今天不下雨)是多少？" },
      answer: "0.7",
      explanation: { en: "1 − 0.3 = 0.7 by the complement rule.", zh: "根据补集规则，1 − 0.3 = 0.7。" }
    },
    {
      type: "mcq",
      question: { en: "P(A) = 0.5, P(B) = 0.3, P(A and B) = 0.1. What is P(A or B)?", zh: "P(A) = 0.5，P(B) = 0.3，P(A且B) = 0.1。P(A或B)是多少？" },
      options: [
        { en: "0.9", zh: "0.9" },
        { en: "0.8", zh: "0.8" },
        { en: "0.7", zh: "0.7" },
        { en: "0.6", zh: "0.6" }
      ],
      answer: 2,
      explanation: { en: "0.5 + 0.3 − 0.1 = 0.7 by the addition rule.", zh: "根据加法规则，0.5 + 0.3 − 0.1 = 0.7。" }
    },
    {
      type: "mcq",
      question: { en: "If two events are mutually exclusive, P(A and B) equals:", zh: "如果两个事件是互斥的，P(A且B)等于：" },
      options: [
        { en: "1", zh: "1" },
        { en: "0", zh: "0" },
        { en: "P(A) × P(B)", zh: "P(A) × P(B)" },
        { en: "P(A) + P(B)", zh: "P(A) + P(B)" }
      ],
      answer: 1,
      explanation: { en: "Mutually exclusive events can never happen together, so their joint probability is 0.", zh: "互斥事件不可能同时发生，所以它们的联合概率为0。" }
    }
  ]
},
{
  day: 4,
  title: { en: "Conditional Probability", zh: "条件概率" },
  content: {
    en: `<p>Conditional probability answers the question: "given that we already know B happened, how likely is A?" It's written P(A|B), read "the probability of A given B."</p>
    <div class="formula">P(A|B) = P(A and B) / P(B)</div>
    <p>Conditioning is everywhere: the probability a customer churns GIVEN they haven't logged in for two weeks is very different from the overall churn rate. The probability someone has a disease GIVEN a positive test result is different from the test's raw accuracy.</p>
    <p>The biggest everyday mistake is confusing P(A|B) with P(B|A) — these are generally NOT the same. "The probability it's raining given the ground is wet" is not the same as "the probability the ground is wet given it's raining" (sprinklers exist!).</p>`,
    zh: `<p>条件概率回答的问题是："已知B已经发生，那么A发生的可能性有多大？"记作P(A|B)，读作"在B条件下A的概率"。</p>
    <div class="formula">P(A|B) = P(A且B) / P(B)</div>
    <p>条件概率在生活中无处不在：在"用户已经两周没登录"这个条件下的流失概率，和整体流失率完全不同。在"检测结果为阳性"这个条件下患病的概率，也和检测本身的准确率不是一回事。</p>
    <p>日常最常见的错误，是把P(A|B)和P(B|A)混为一谈——这两者通常并不相等。"地面湿了的条件下正在下雨的概率"，和"正在下雨的条件下地面湿了的概率"是不同的（别忘了还有洒水器！）。</p>`
  },
  example: {
    en: `<p>An HR team finds 90% of employees who quit within a year had also missed a 1:1 meeting in their first month. It's tempting to think "missing a 1:1 predicts quitting" — but that's P(missed 1:1 | quit). What they actually need for early intervention is P(quit | missed 1:1), which could be much lower if most employees miss a 1:1 at some point anyway.</p>`,
    zh: `<p>某HR团队发现，一年内离职的员工中有90%曾在入职第一个月缺席过一对一会议。这很容易让人觉得"缺席一对一会议能预测离职"，但这其实是P(缺席一对一|离职)。他们真正需要用来提前干预的是P(离职|缺席一对一)——如果大多数员工本来就都缺席过一次一对一会议，这个概率可能低得多。</p>`
  },
  takeaway: {
    en: "P(A|B) ≠ P(B|A). Always be explicit about which direction you're conditioning — this single confusion causes more real-world probability errors than anything else.",
    zh: "P(A|B) ≠ P(B|A)。务必明确条件的方向——这个混淆是现实中最常见的概率错误来源。"
  },
  exercises: [
    {
      type: "numeric",
      question: { en: "P(A and B) = 0.12 and P(B) = 0.3. What is P(A|B)?", zh: "P(A且B) = 0.12，P(B) = 0.3。P(A|B)是多少？" },
      answer: "0.4",
      explanation: { en: "P(A|B) = 0.12 / 0.3 = 0.4.", zh: "P(A|B) = 0.12 / 0.3 = 0.4。" }
    },
    {
      type: "mcq",
      question: { en: "Which is NOT the same as P(has flu | has fever)?", zh: "以下哪一项与 P(患流感 | 发烧) 不是同一个概率？" },
      options: [
        { en: "Among people with a fever, the proportion who have flu", zh: "在发烧的人中，患流感的比例" },
        { en: "Among people with flu, the proportion who have a fever", zh: "在患流感的人中，发烧的比例" },
        { en: "The probability of having flu, conditioned on observing a fever", zh: "在观察到发烧的条件下，患流感的概率" },
        { en: "None of the above — they're all the same", zh: "以上都相同" }
      ],
      answer: 1,
      explanation: { en: "That description is P(fever | flu), the reverse conditional — not the same quantity.", zh: "该描述是P(发烧|患流感)，方向相反，并不是同一个量。" }
    },
    {
      type: "short",
      question: { en: "True or False: P(A|B) always equals P(B|A).", zh: "判断对错：P(A|B) 总是等于 P(B|A)。" },
      answer: "false",
      explanation: { en: "False in general — they're only equal in special cases (e.g., when P(A) = P(B)).", zh: "一般情况下不相等——只有在特殊情况下才相等（例如P(A) = P(B)时）。" }
    }
  ]
},
{
  day: 5,
  title: { en: "Independence vs. Dependence", zh: "独立事件与相关事件" },
  content: {
    en: `<p>Two events are <strong>independent</strong> if knowing one happened tells you nothing about the other: P(A|B) = P(A). Independent events multiply: P(A and B) = P(A) × P(B).</p>
    <div class="formula">Independent: P(A and B) = P(A) × P(B)</div>
    <p>Coin flips are independent — a run of 5 heads doesn't change the odds of the next flip. But most interesting real-world events are <strong>dependent</strong>. Whether a customer buys product B depends heavily on whether they bought product A. Whether a startup raises a Series B depends heavily on whether it hit its Series A milestones.</p>
    <p>Assuming independence when events are actually dependent is one of the most costly modeling mistakes — it's part of what caused the 2008 financial crisis, when mortgage defaults were modeled as independent but were actually highly correlated through the shared housing market.</p>`,
    zh: `<p>如果知道一个事件发生了，对另一个事件是否发生没有任何影响，这两个事件就是<strong>独立</strong>的：P(A|B) = P(A)。独立事件的概率可以直接相乘：P(A且B) = P(A) × P(B)。</p>
    <div class="formula">独立事件：P(A且B) = P(A) × P(B)</div>
    <p>掷硬币就是独立事件——连续5次正面并不会改变下一次投掷的概率。但现实生活中大多数有意思的事件其实是<strong>相关（不独立）</strong>的。一个用户是否购买产品B，很大程度上取决于他是否购买过产品A。一家创业公司能否拿到B轮融资，很大程度上取决于它是否达成了A轮设定的里程碑。</p>
    <p>把本来相关的事件错误地当作独立事件来建模，是代价最高的建模错误之一——2008年金融危机的部分原因，正是按揭违约被建模为相互独立，而实际上它们通过共同的房地产市场高度相关。</p>`
  },
  example: {
    en: `<p>A founder assumes the probability that ALL 5 of her enterprise pilot customers convert to paying customers is 0.6⁵ ≈ 8%, treating each conversion as independent. But if the pilots are all in the same industry with the same budget cycle, their outcomes are correlated — the real joint probability could be much higher (they all convert together) or much lower (they all delay budget together).</p>`,
    zh: `<p>一位创始人假设她的5个企业试点客户全部转化为付费客户的概率是0.6的5次方，约等于8%，把每一次转化都当作独立事件。但如果这些试点客户都在同一个行业、有相同的预算周期，那么它们的结果其实是相关的——真实的联合概率可能高得多（同时转化）或低得多（同时因预算收紧而推迟）。</p>`
  },
  takeaway: {
    en: "Before multiplying probabilities together, ask: could a shared underlying cause make these events move together? If yes, they're not independent.",
    zh: "在把多个概率相乘之前，先问自己：是否存在一个共同的潜在原因，会让这些事件同向变化？如果是，它们就不是独立的。"
  },
  exercises: [
    {
      type: "numeric",
      question: { en: "Two fair coins are flipped. What is P(both heads)?", zh: "抛两枚均匀的硬币，P(两次都是正面)是多少？" },
      answer: "0.25",
      explanation: { en: "Independent events multiply: 0.5 × 0.5 = 0.25.", zh: "独立事件概率相乘：0.5 × 0.5 = 0.25。" }
    },
    {
      type: "mcq",
      question: { en: "Which pair of events is most likely INDEPENDENT?", zh: "以下哪一对事件最可能是独立的？" },
      options: [
        { en: "Rolling a 6 on a die, then rolling a 6 again", zh: "掷骰子出现6点，然后再次掷出6点" },
        { en: "A stock going up today and going up tomorrow", zh: "某股票今天上涨，明天也上涨" },
        { en: "A customer buying an umbrella and it raining that day", zh: "顾客买伞，以及当天下雨" },
        { en: "A startup's Q1 revenue and its Q2 revenue", zh: "某创业公司第一季度和第二季度的营收" }
      ],
      answer: 0,
      explanation: { en: "Each die roll is a fresh, unrelated physical event. The others share underlying causes (momentum, weather, business trajectory).", zh: "每次掷骰子都是全新、互不相关的物理事件。其他选项都存在共同的潜在原因（动量、天气、业务发展趋势）。" }
    },
    {
      type: "short",
      question: { en: "True or False: If P(A|B) = P(A), then A and B are independent.", zh: "判断对错：如果P(A|B) = P(A)，那么A和B是独立的。" },
      answer: "true",
      explanation: { en: "That's exactly the definition of independence.", zh: "这正是独立性的定义。" }
    }
  ]
},
{
  day: 6,
  title: { en: "Bayes' Theorem: Updating Beliefs", zh: "贝叶斯定理：更新信念" },
  content: {
    en: `<p>Bayes' theorem is the formal rule for updating a belief when new evidence arrives. It connects P(A|B) to P(B|A) — the two conditional probabilities you learned not to confuse on Day 4.</p>
    <div class="formula">P(A|B) = [P(B|A) × P(A)] / P(B)</div>
    <p>Think of it in three pieces: your <strong>prior</strong> belief P(A) before seeing evidence, the <strong>likelihood</strong> P(B|A) of seeing that evidence if A were true, and your updated <strong>posterior</strong> belief P(A|B) after incorporating the evidence.</p>
    <p>The famous counterintuitive result: even a highly accurate medical test can produce mostly false positives if the disease is rare, because a low prior drags the posterior down. This is arguably the single most useful piece of math for interpreting any test, signal, or metric in business and life.</p>`,
    zh: `<p>贝叶斯定理是在获得新证据后更新信念的正式规则。它把P(A|B)和P(B|A)联系了起来——也就是你在第4天学到的、不能混淆的那两个条件概率。</p>
    <div class="formula">P(A|B) = [P(B|A) × P(A)] / P(B)</div>
    <p>可以把它拆成三部分来理解：看到证据之前的<strong>先验</strong>信念P(A)；如果A为真时观察到这个证据的<strong>似然</strong>P(B|A)；以及结合证据之后更新得到的<strong>后验</strong>信念P(A|B)。</p>
    <p>一个著名的反直觉结论是：即使是一个非常准确的医学检测，如果疾病本身很罕见，检测结果阳性中也可能大部分是假阳性——因为很低的先验（基础发病率）会把后验概率拉低。这可能是商业和生活中，解读任何检测、信号或指标时最有用的一条数学工具。</p>`
  },
  example: {
    en: `<p>A hiring test is "90% accurate" at predicting top performers. Sounds great — but if only 10% of applicants would actually be top performers (the prior), Bayes' theorem shows a large share of people who "pass" the test still won't be top performers. Trusting an impressive accuracy number without checking the base rate is one of the most common hiring and product mistakes.</p>`,
    zh: `<p>某招聘测评工具号称能"90%准确"地预测谁会成为优秀员工。听起来很厉害——但如果实际上只有10%的应聘者真正会成为优秀员工（这就是先验概率），贝叶斯定理告诉我们，"通过测评"的人中仍有相当一部分不会是优秀员工。只看一个听起来很唬人的准确率数字、而不检查基础发生率，是招聘和产品决策中最常见的错误之一。</p>`
  },
  takeaway: {
    en: "Posterior belief = prior belief updated by evidence. Before trusting any 'accurate' test or signal, always ask: what's the base rate (prior)?",
    zh: "后验信念 = 先验信念根据证据更新后的结果。在相信任何“准确”的检测或信号之前，先问：基础发生率（先验）是多少？"
  },
  exercises: [
    {
      type: "numeric",
      question: { en: "Out of 1000 people, 1% (10 people) have a disease, so 990 don't. A test has a 10% false-positive rate. About how many healthy people will incorrectly test positive?", zh: "1000人中有1%（10人）患病，990人未患病。检测的假阳性率为10%。大约有多少健康人会被误判为阳性？" },
      answer: "99",
      explanation: { en: "990 × 0.10 = 99 healthy people will falsely test positive — often more than the true positives, which is why the base rate matters so much.", zh: "990 × 0.10 = 99 名健康人会被误判为阳性——这个数字往往比真阳性还多，这正是先验概率如此重要的原因。" }
    },
    {
      type: "mcq",
      question: { en: "A 'highly accurate' test can still produce mostly false positives when...", zh: "“高度准确”的检测仍可能产生大量假阳性，通常是因为……" },
      options: [
        { en: "the condition being tested is very common", zh: "被检测的情况非常普遍" },
        { en: "the condition being tested is very rare (low prior)", zh: "被检测的情况非常罕见（先验概率很低）" },
        { en: "the test is only given to people who are already sick", zh: "该检测只用于已经患病的人" },
        { en: "sensitivity is exactly 100%", zh: "检测的灵敏度恰好是100%" }
      ],
      answer: 1,
      explanation: { en: "With a rare condition, the pool of healthy people is so large that even a small false-positive rate produces more false positives than true positives.", zh: "当疾病很罕见时，健康人群基数很大，即使假阳性率很低，产生的假阳性人数也可能超过真阳性人数。" }
    },
    {
      type: "short",
      question: { en: "In Bayes' theorem, P(A) before seeing new evidence is called the ______.", zh: "在贝叶斯定理中，看到新证据之前的P(A)被称为______。" },
      answer: "prior",
      explanation: { en: "It's your starting belief, later updated into a posterior.", zh: "它是你最初的信念，之后会被更新为后验信念。" }
    }
  ]
},
{
  day: 7,
  title: { en: "Week 1 Review: Bayes in the Real World", zh: "第一周复习：贝叶斯思维在现实中的应用" },
  content: {
    en: `<p>This week you built the foundation: what probability means, how to define a sample space, how to combine probabilities (addition/complement), how to condition on new information, when events are independent, and how to formally update beliefs with Bayes' theorem.</p>
    <p>These five ideas are the toolkit behind almost every "smart" system you interact with daily. A spam filter is a live Bayesian machine: it starts with a prior probability that any email is spam, then updates that belief based on the words in the email (evidence), producing a posterior probability of "spam" that it uses to decide whether to file the email away.</p>
    <p>The same five-step pattern — define outcomes, state your prior, gather evidence, update, decide — is exactly what you'll use for business and life decisions in the weeks ahead.</p>`,
    zh: `<p>这一周你搭建起了概率论的基础：什么是概率、如何定义样本空间、如何组合概率（加法/补集规则）、如何基于新信息进行条件推理、事件何时是独立的，以及如何用贝叶斯定理正式地更新信念。</p>
    <p>这五个概念，几乎是你每天接触的所有"智能"系统背后的工具箱。垃圾邮件过滤器本质上就是一台实时运行的贝叶斯机器：它从"某封邮件是垃圾邮件"的先验概率出发，根据邮件中的词语（证据）不断更新这个信念，得到"是垃圾邮件"的后验概率，并据此决定是否把邮件归类为垃圾邮件。</p>
    <p>同样的五步模式——定义可能结果、明确先验、收集证据、更新信念、做出决策——正是你接下来几周将用于工作和生活决策的方法。</p>`
  },
  example: {
    en: `<p>Review the last big decision you made under uncertainty (a hire, an investment, a launch). Try to name: What was your sample space of outcomes? What was your prior? What evidence did you actually use to update? Most people discover they skipped straight to a gut-feeling posterior without doing the steps in between.</p>`,
    zh: `<p>回顾你最近一次在不确定性下做出的重大决策（招聘、投资、产品发布等）。试着说出：你当时的结果样本空间是什么？先验是什么？你用了哪些证据来更新判断？大多数人会发现，自己其实跳过了中间步骤，直接凭直觉给出了一个"后验"结论。</p>`
  },
  takeaway: {
    en: "Five tools, one pattern: define outcomes → set a prior → gather evidence → update → decide. Use it deliberately this week.",
    zh: "五个工具，一种模式：定义结果 → 设定先验 → 收集证据 → 更新 → 决策。这周试着有意识地运用它。"
  },
  exercises: [
    {
      type: "mcq",
      question: { en: "Which formula correctly represents Bayes' theorem?", zh: "以下哪个公式正确表示了贝叶斯定理？" },
      options: [
        { en: "P(A|B) = P(B|A) × P(A) / P(B)", zh: "P(A|B) = P(B|A) × P(A) / P(B)" },
        { en: "P(A|B) = P(A) × P(B)", zh: "P(A|B) = P(A) × P(B)" },
        { en: "P(A|B) = P(A) − P(B)", zh: "P(A|B) = P(A) − P(B)" },
        { en: "P(A|B) = P(B) / P(A)", zh: "P(A|B) = P(B) / P(A)" }
      ],
      answer: 0,
      explanation: { en: "This is the definition: posterior equals likelihood times prior, normalized by P(B).", zh: "这就是贝叶斯定理的定义：后验 = 似然 × 先验，再除以P(B)进行归一化。" }
    },
    {
      type: "mcq",
      question: { en: "A spam filter's 'prior' is best described as:", zh: "垃圾邮件过滤器的“先验”最准确的描述是：" },
      options: [
        { en: "The probability an email is spam before reading its content", zh: "在阅读邮件内容之前，该邮件是垃圾邮件的概率" },
        { en: "The overall accuracy of the filter", zh: "过滤器的整体准确率" },
        { en: "The number of words in the email", zh: "邮件中的单词数量" },
        { en: "The false-positive rate", zh: "假阳性率" }
      ],
      answer: 0,
      explanation: { en: "The prior is the starting belief before any evidence (the email's words) is considered.", zh: "先验是在考虑任何证据（邮件的词语）之前的初始信念。" }
    },
    {
      type: "short",
      question: { en: "True or False: If P(A|B) = P(A), A and B are dependent.", zh: "判断对错：如果P(A|B) = P(A)，那么A和B是相关的（不独立）。" },
      answer: "false",
      explanation: { en: "P(A|B) = P(A) is precisely the definition of independence, not dependence.", zh: "P(A|B) = P(A) 恰恰是独立性的定义，而不是相关性。" }
    }
  ]
}
];
