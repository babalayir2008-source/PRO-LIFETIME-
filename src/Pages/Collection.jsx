import { useState, useEffect } from "react";

import { CollectionWatch } from "../components/WatchCollection";
import { CompareTwo } from "../components/Comparetwo";
import { SpecialOffers } from "../components/SpecialOffers";
import {Footer} from "../components/Footer";
function Collection() {
  return (
    <div>
        
        <CollectionWatch />
        <CompareTwo />
        <SpecialOffers />
        <Footer />
    </div>
  );
}

export { Collection };