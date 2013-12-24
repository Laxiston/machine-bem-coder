# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

$script = <<SCRIPT
  sudo npm install --global --quiet bem-cli
  sudo npm install --global --quiet bower
  echo "alias 'bemblock'='bem create -l desktop.blocks/ -b'" >> /home/vagrant/.bashrc
  echo "alias 'bempage'='bem create -l desktop.bundles/ -b'" >> /home/vagrant/.bashrc
  echo "cd /home/vagrant/project" >> /home/vagrant/.bashrc
  cd /home/vagrant/project && npm install --quiet --no-bin-links && bower install
  echo "Done!"
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"
  config.vm.network :forwarded_port, guest: 8080, host: 8080
  config.vm.synced_folder ".", "/home/vagrant/project", :create => true

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "256", "--cpus",   "1"]
  end

  config.vm.provision :chef_solo do |chef|
    chef.recipe_url = "https://dl.dropboxusercontent.com/u/252475/cookbooks.tar.gz"
    chef.cookbooks_path = [:vm, "cookbooks"]
    chef.add_recipe "git"
    chef.add_recipe "nodejs"
    # chef.add_recipe "mongodb-debs"
    # chef.add_recipe "redis-server"
    chef.json = {
      "nodejs" => {
        "version" => "0.10.20"
	    # , "from_source" => true
      }
    }
  end
  config.vm.provision :shell, :inline => $script
end