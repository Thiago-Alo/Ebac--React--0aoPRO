import React from "react";

export function Welcome(props){
    const qwe = props.name.toLowerCase();
    return (
        <div>
            <h1>Function {qwe}</h1>
            <div>A bulletproof vest wears Chuck Norris for protection. Chuck Norris can hear sign language. Chuck Norris’ tears cure cancer. Too bad he has never cried. When Chuck Norris writes, he makes paper bleed. On New Year’s Eve, Chuck Norris promised that he’d lose 20 pounds. The next morning he shaved his chest and smiled as he realized that he’d lost 30.</div>
        </div>
    );
}
