## Useful aliases
# Replace ls with exa


alias ls='exa -al --color=always --group-directories-first --icons' # preferred listing
alias la='exa -a --color=always --group-directories-first --icons'  # all files and dirs
alias ld 'ls -l | grep "^d"'
alias ll='exa -l --color=always --group-directories-first --icons'  # long format
if type -q exa
    alias l="lsd --date '+%d.%m.%Y %H:%M' -lah"
    alias l.="exa -a | egrep '^\.'" 
    alias la 'exa --long --all --group --header --binary --links --inode --blocks'
    alias ld 'exa --long --all --group --header --list-dirs'
    alias ll 'exa --long --all --group --header --git'
    alias lt='exa -aT --color=always --group-directories-first --icons' # tree listing
end

# Neofetch
alias neo="neofetch"
alias kernel="uname -rs"
alias k="uname -rs"
alias gnome="gnome-shell --version"
alias g="gnome-shell --version"
alias fedora="lsb_release -sd"
alias f="lsb_release -sd"
alias age="stat / | grep "Birth""

# Timeshift
alias tm="sudo timeshift"
alias tmc="sudo timeshift --create"
alias tmd="sudo timeshift --delete"
alias tmda="sudo timeshift --delete-all"
alias tml="sudo timeshift --list"

alias g="git"
alias cl="clear -x"
alias grep='grep --colour=auto'
alias n="node"
alias vi="vim"
alias x="exit"
alias reboot="sudo reboot"
alias upd="sudo dnf upgrade --refresh -y && flatpak update -y && clean"
alias clean="sudo dnf autoremove && dnf clean all"
alias install="sudo dnf install -y"
alias remove="sudo dnf remove"
alias autoremove="sudo dnf autoremove"
alias search="sudo dnf search"
alias makecache="sudo dnf makecache"
alias chlinks="sudo symlinks -r /usr | grep dangling"
alias rmlinks="sudo symlinks -r -d /usr"
alias refreshcache="sudo dnf makecache --refresh"
alias fishconfig "gedit ~/.config/fish/config.fish"
alias kittyconfig "gedit ~/.config/kitty/kitty.conf"
alias starshipconfig "gedit ~/.config/starship.toml"
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias hw='hwinfo --short'
alias wipe="sudo wipe -rFc" 
alias rm="sudo env rm -rdf TERM=screen-256color rm"
alias cat="bat --theme=\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo default || echo GitHub)"

zz
# editor
alias v="vim -v"
alias vim="vim -v"
alias e="emacsclient"
alias ec="emacsclient -c"

# Get the error messages from journalctl
alias jctl="journalctl -p 3 -xb"

# others
alias rscp="rsync -vazP -e ssh"
alias axel="axel -a"
alias tree="tree -N"


