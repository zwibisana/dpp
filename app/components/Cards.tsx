import Image from "next/image";

export default function Cards() {
  return (
    <div className="line-height content-stretch flex flex-col items-start relative size-full font-discordia bg-[#D83B18] text-[#F9F7EA] text-[16px] text-base/7 px-100 pt-20 pb-40 gap-y-5 w-full min-h-svh relative">
      <Image
        src="/Family.png"
        alt="a picture of my family walking with our hands together"
        width={400}
        height={280}
        className="object-cover pb-10"
      />
      <div className="text-[20px] font-discordia italic">
        <h1>Introduction</h1>
      </div>
      <div>
        I was born and raised in Baltimore, Maryland. My parents were born in
        Indonesia, a country in Southeast Asia.
      </div>
      <div>
        Growing up in the United States, I never really had a strong connection
        to my extended family. I spoke little Indonesian and only visited every
        so often. Because of that, many of my memories and impressions of them
        are fragments, characterized by brief visits and assumptions drawn from
        moments that were far often too few.
      </div>
      <div>
        Despite this distance, my parents were able to create a community here.
        They started small, reconnecting with a longtime friend from college who
        had moved to Baltimore a few years earlier.
      </div>
      <div>
        Over time, the circle grew. Once, in an Asian market, my father heard
        someone humming an Indonesian tune through the aisles and struck up a
        conversation. That man and his family would become part of our lives,
        and his daughter later became my best friend. We grew up together and
        came to share life in all its ordinary, mundane, and meaningful moments.
      </div>
      <div>
        The spring semester of my freshman year, I was in a seminar design class
        when I received a phone call from my brother asking me to get on the
        next flight from Boston to Baltimore. When I returned home, I learned
        that my father had suffered a sudden heart attack and passed away that
        morning.
      </div>
      <div>
        Once again, I realized how much of my life had been shaped by forces I
        did not fully understand. I had just seen him a few weeks earlier during
        my three week break for the holidays, when much of life still felt
        consistent and familiar. For a while I carried a quiet grief, finding
        solace in the friendships I had made at university after I returned to
        Boston.
      </div>
      <div>
        At nineteen, I was left wondering about the things he had not yet told
        me.{" "}
        <mark className="text-[#F9F7EA] italic bg-transparent">
          What stories had he been saving? What pieces of our family history
          disappeared with him?
        </mark>{" "}
        For a moment, my world tilted and all I could do was continue moving
        forward while learning how to live within the circle of grief that
        surrounded me.
      </div>
      <div>
        In the months that followed, I found myself thinking often about
        identity. Beyond the lessons my father had already given me, I wondered
        who came before him and before me.{" "}
        <mark className="text-[#F9F7EA] italic bg-transparent">
          Who were my ancestors? What lives had they lived across Indonesia?
        </mark>{" "}
        Many of these questions remained unanswered, but they stayed with me,
        permeating through the way I began to look at the traditions that had
        existed around me unnoticed my whole life.
      </div>
      <div>
        Food became one of the clearest ways to begin understanding that
        inheritance. The Indonesian archipelago is home to a cuisine as vast and
        complex as its geography, yet it has never achieved the same widespread
        recognition in the United States as many other Asian cuisines.
        Considering that Indonesia is the fourth most populous country in the
        world, this absence felt striking, and indeed, it is closely tied to the
        history of migration and the realities of the immigrant experience.
      </div>
      <div>
        Unlike cuisines that spread through large diasporic communities over
        generations, Indonesian food often arrives in quieter ways. Many of the
        ingredients essential to traditional bumbu, or spice mixtures, remain
        difficult to find in American grocery stores. For immigrants like my
        family and other Indonesians living abroad, recreating familiar dishes
        often requires sourcing ingredients themselves or adapting recipes in
        ways that still preserve their character. Within Indonesian communities
        abroad, spaces such as pengajians, or religious study gatherings, have
        consistently attempted to preserve that character. I grew up coming to
        these gatherings every weekend, which brought families together not only
        for faith, but also for language, conversation, and the foods that carry
        this shared memory. In these spaces, Indonesian cuisine is exchanged,
        traditions are practiced, and culture continues to live through and
        across generations.
      </div>
      <Image
        src="/Pengajian.png"
        alt="a picture of a pengajian, an Indonesian religious study group"
        width={400}
        height={280}
        className="object-cover py-10"
      />
      <div>
        This project is a small reflection of that continuity. While it serves
        as a simple introduction, it is also an attempt to share the flavors and
        traditions that shaped my family and my own upbringing, offering an
        accessible doorway into the depth of Indonesian cuisine.
      </div>
    </div>
  );
}
