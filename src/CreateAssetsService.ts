interface IAsset {
  name: string;
  description: string;
  owner: string;
}

class CreateAssetService {
  execute({ name, description, owner }: IAsset) {
    console.log(name, description, owner);
  }
}

export default new CreateAssetService();
