### Ansible Configuration:
  

  ansible@ubuntu-c:~$ ansible --version
  ansible [core 2.17.4]
  config file = None
  configured module search path = ['/home/ansible/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/local/lib/python3.10/dist-packages/ansible
  ansible collection location = /home/ansible/.ansible/collections:/usr/share/ansible/collections
  executable location = /usr/local/bin/ansible
  python version = 3.10.12 (main, Jul 29 2024, 16:56:48) [GCC 11.4.0] (/usr/bin/python3)
  jinja version = 3.1.4
  libyaml = True

### Priority [Low to High]:

/etc/ansible/ansible.cfg   -> Etc Config file
~/.ansible.cfg             -> Home Directory Config
./ansible.cfg              -> Current directory
ANSIBLE_CONFIG             -> Variable Path


### Inventories:

To avoid host key checking,
ANSIBLE_HOST_KEY_CHECKING=False
[or] ansible.cfg -> host_key_checking = False

# ansible all -m ping
# ansible all -m ping -o [ to give output in single line]
# ansible centos --list-hosts
# ansible all --list-hosts
# ansible centos1 --list-hosts
# ansible centos1 -m ping -o
# ansible all -m command -a 'id' -o

sample hosts file:
[centos]
centos1 ansible_user=root    <- this will run as root user>
centos2:2222 ansible_user=root < or centos2 ansible_user=root ansible_port=2222 to change the default ssh port >

[ubuntu]
ubuntu1 ansible_become=true ansible_become_pass=password <- this will run as root user>
ubuntu[2:5]   <- instead of providing list of node names>

[redhat]
redhat[1:4]

[redhat:vars]
ansible_become=true   <- to set the variable for whole group>

[all:vars]   
ansible_port=222      <- to set the variable for all nodes if anything set to node decleartion, this value will get overwritten >

[linux:children]                  <- ansible linux -m ping -o >
centos
ubuntu

[linux:vars]   
ansible_port=222 


this hosts file can be in yaml or json too..

ansible.cfg
[defaults]
inventory = hosts.yaml
hosts_key_checking = False

hosts.yaml
---
centos:
  hosts:
    centos1:
      ansible_port=2222
    centos2:
    centos3:

ubunut:
  hosts:
    ubuntu1:
    ubuntu2:
  vars:
    ansible_become: true
    ansible_become_pass: password





