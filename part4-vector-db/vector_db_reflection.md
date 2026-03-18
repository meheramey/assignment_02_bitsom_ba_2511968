# Vector DB Reflection

## Vector DB Use Case

Honestly, keyword search would fail pretty badly for this use case. The problem is that keyword search is just pattern matching — it scans for the exact word you typed. So if a lawyer searches "termination clause", the database will skip any paragraph that uses words like "right to cancel" or "early exit provision" even if those paragraphs mean the exact same thing. In a 500 page legal contract, this would mean missing a lot of relevant content.

The bigger issue is that lawyers don't always remember how something was phrased in the contract. They just know what they are looking for. A system that requires the exact keyword is not really useful in a professional setting like this.

This is where a vector database helps. What it does is convert every clause or paragraph into a numerical vector using an embedding model. That vector captures the meaning of the text, not just the words. When a lawyer types a question, that question also becomes a vector and the system finds the paragraphs closest to it in meaning.

So even if the contract says "either party may dissolve this agreement upon 30 days notice" and the lawyer searches "how to end the contract", the vector database will still find it because the meaning matches even if the words don't.

I think the key thing is that this system understands context, not just characters. For contract review where language is complex, this is way more reliable than keyword search.
