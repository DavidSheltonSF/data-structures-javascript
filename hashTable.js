class HashTable {
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }

  _hash(key){
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
      return hash % this.size;
    }
  }

  set(key, value){
    const index = this._hash(key);

    // If no collision
    if(!this.table[index]){
      this.table[index] = [[key, value]];
    }
    // If there was collison
    else {
      // Handle collision

      // Bucket of collisioned elements
      let bucket = this.table[index];

      // Iter throuth the bucket searching the element by its key
      for(let i = 0; i < bucket.length; i++){
        // If element already exists
        if(bucket[i][0] === key){
          bucket[i][1] = value; // update the element
          return;
        }
        // Add the new element into the bucket
        bucket.push([key, value]);
      }
    }
  }

  get(key){
    const index = this._hash(key);

    let bucket = this.table[index];

    if (bucket){
      for (let i = 0; i < bucket.length; i++){
        if(bucket[i][0] === key){
          return bucket[i][1];
        }
      }
    }

    return undefined;
  }

  remove(key){
    const index = this._hash(key);

    const bucket = this.table[index];

    if (bucket){
      for (let i = 0; i < bucket.length; i++){
        if(bucket[i][0] === key){
          bucket.splice(i, 1);//remove the element from the bucket
        }
      }
    }
  }
}

const hash = new HashTable(10);
hash.set('David', 'desenvolvedor');
hash.set('Maria', 'advogada');
hash.set('Julio', 'influencer');
hash.set('Shelton', 'segurança do trabalho');

hash.remove('Shelton')
console.log(hash.get('Shelton'));