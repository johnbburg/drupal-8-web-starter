base:
  '*':
    - core
    - epel
    - jinja26
    - node
    - node.npm-install
    - ruby
#    Load mysql.client first to avoid getting mysql-libs from base repo
    - mysql.client
    - mysql
    - memcached.config

    - varnish.repo
    - varnish
    - php.ng
    - php.ng.cli.ini


    - core.certificates
    - apache.mod_ssl
    - apache.mod_php5
    - apache.config
    - apache.vhosts.standard


    - composer

    - drush



    - java



    - solr.v4


    - mailhog
    - core.cleanup
