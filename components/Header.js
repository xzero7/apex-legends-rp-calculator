export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        Welcome to the Apex RP Calculator. This wesbite allows you to play around with the new RP System introduced
        in Season Saviors, Season 13 of Apex Legends. I am a software engineer and doing this as a playground. For cool
        stat tracking and ranking you should use{" "}
        <a href="https://apexlegendsstatus.com/">Apex Legends Status</a> 
      </p>

      <h3 className="title"> How RP Works in Season 13</h3>
      <p>
        So the Kill Assist Points in Season 13 (KP) Are now uncapped. Meaning you will get RP for ALL KP acquired during 
        a match. Unlike previous systems where it was capped at 125 bonus RP, which usually was about 6-7 KP. However one
        thing to understand is that there is a "soft" limit in place. So while yes you will get RP, you will get less of it
        the more KP you get.
      </p>
      <p>
        The first 3 KP you acquire will get the full Base RP (which is dependant on placement).
        The next 3 KP you will get 80% of the Base RP.
        Anything after that you will get 20% of the Base RP
      </p>
      <p>
        This season also introduces Team KP. Which you will get rewarded 50% of the RP done by your teammates. Which is kills
        or assist you do not help in. Another thing to keep in mind is that the Base RP per KP will vary if you kill someone
        lower or higher then your current Rank.
      </p>
    </>
  );
}
