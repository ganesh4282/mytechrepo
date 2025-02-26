
```
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

ansible all -m ping
ansible all -m ping -o [ to give output in single line]
ansible centos --list-hosts
ansible all --list-hosts
ansible centos1 --list-hosts
ansible centos1 -m ping -o
ansible all -m command -a 'id' -o

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






- features :
    - Agnetless
    - Uses SSH
    - Push Method

- Project Structure:
    - inventory
      - hosts
    -roles
      - python
        - tasks
            - main.yml
      - README.md
      - setup-playbook.yml

- Key Components:
    - Modules:
      - Definition:
        - A Module is a small, reusable script that performs a specific task (e.g., install a package, manage files, start a service, etc.).
      - Purpose:
        - Executes tasks on remote nodes.
        - Supports multiple modules (built-in & custom).
        - Examples: yum, copy, service, file, user.
      - Features:
        - Custom modules can be written in Python
    
    - Playbooks:
      - Definition:
        - A Playbook is a YAML file that defines a set of plays to be executed on remote hosts.
      - Purpose:
        - Acts as the main automation script in Ansible.
        - Defines what tasks should run on which hosts.
        - Can include multiple plays.
      - Features:
        - Defines automation logic
        - Contains multiple plays

    - Play:
      - Definition:
        - A Play is a set of tasks executed on a group of hosts inside a Playbook.
      - Purpose:
        - Maps tasks to target hosts.
        - A playbook can have multiple plays. 
      - Features:
        - Each play can have unique tasks

    - Role:
      - Definition:
        - A Role is a way to organize playbooks into reusable components.
      - Purpose:
        - Helps reuse automation code.
        - Modularizes Ansible code.
        - Contains tasks, handlers, variables, templates, and files.
      - Features:
        - Each play can have unique tasks

    - Plugin:
      - Definition:
        - A Plugin is an extension that enhances Ansible functionality.
      - Types:
        - Action Plugin	    : Runs before executing a module
        - Callback Plugin	  : Modifies Playbook output (e.g., logging, formatting)
        - Connection Plugin : Manages communication (e.g., SSH, WinRM)
        - Inventory Plugin	: Dynamically generates inventory (e.g., AWS, Azure)
        - Lookup Plugin	    : Retrieves data from external sources (e.g., Vault, database)
        - Filter Plugin	    : Modifies Jinja2 template output
      - Features:
        - Extends Ansible functionalities
        - Custom plugins can be created
        - Commonly used for inventory, logging, and formatting


  - Verify Playbooks
    ansible-playbook playbook.yml --<Options>
      --syntax-check	Validates YAML syntax
      --check	        Dry-run without applying changes
      --step	        Execute tasks one-by-one
      --diff	        Show file/template changes
      --limit	        Test on a small subset of hosts
    Other Commands
      ansible-lint	            Checks for best practices, Deprecated modules & syntax
      ansible-inventory --list	Validates inventory file  
      ansible all -m ping       Verify that Ansible can reach target hosts.
    Moduels Within Playbooks
      debug module	            Verify variables & expressions


  - Variable:
    - Variable Precedence in Ansible (Highest to Lowest)
      Order	Variable Location	Example
      1️⃣ Command Line (-e)	ansible-playbook site.yml -e "app_port=9090"	
      2️⃣ Playbook Variables (vars)	vars: { app_port: 8080 }	
      3️⃣ Inventory Variables	app_port=8080 in inventory.ini	
      4️⃣ Variable Files (vars_files)	vars_files: app_vars.yml	
      5️⃣ Role Defaults (defaults/main.yml)	defaults: { app_port: 8080 }	
      6️⃣ Ansible Facts (ansible_facts)	ansible_distribution	
      7️⃣ Environment Variables (lookup('env', 'HOME'))	export app_port=8080	
      8️⃣ Hardcoded Defaults (default())	`app_port	default('8080')`  
        
  - Error handling in Ansible :
    - Using ignore_errors to Continue Execution
      - Allows a task to fail without stopping the playbook.
      - Use Case: When failure is not critical.
      - Risk: May hide real errors, making debugging difficult.
    - Using failed_when for Custom Failure Conditions
      - Define specific conditions to determine failure.
      - Use Case: When built-in failure detection is not enough.      
      - Example: Fail only if disk usage exceeds 90%.
    - Using retries and until for Task Retries
      - Retry a task multiple times if it fails.
      - Use Case: For temporary failures (e.g., waiting for a service).
      - Example: Retry 5 times with a 10-second delay.
    - Using the block, rescue, and always Statements
      - Handle errors within a structured block.
      - block → Runs normally.
      - rescue → Runs only if a task in block fails.
      - always → Runs regardless of success or failure.
      - Use Case: To catch and handle failures gracefully.
      - Example: If package installation fails, a custom error message is printed, and execution continues.


```  