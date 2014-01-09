#!perl -w
use CGI;
use strict;

# creare obiect perlCGI 

my $query = new CGI;

# creare header

print $query->header();  

# body

print $query->start_html({-title=>'FormPerlPost',
  		  -author=>'PW'});

print $query->hr();


# creare form.

print $query->startform({-method=>'get'});


# camp text
print $query->h2('Variabila 1:');
print $query->textfield({-name=>'TextfieldOne',
			 -default=>'Var1',
			 -size=>50,
			 -maxlength=>100});
print $query->br();

print $query->h2('Variabila 2:');
print $query->textfield({-name=>'TextfieldTwo',
			 -default=>'Var2',
			 -size=>50,
			 -maxlength=>100});
print $query->br();

# Generate a Radio Group
print $query->h1('Alege operatia dorita');
print $query->radio_group({-name=>'RadioOne',
			   -values=>['Adunare','Scadere', 'Inmultire',
					'Impartire','Ridicare la putere'],
			   -default=>'Adunare'});
print $query->br();

# buton submit
print $query->submit();

# buton reset
print $query->reset();

print $query->endform();



print $query->hr();

# afisare formular precedent

if ($query->param()) {
   
  my $textInput1 = $query->param(-name=>'TextfieldOne');
	my $textInput2 = $query->param(-name=>'TextfieldTwo');

    print $query->hr();
    print $query->p('Prima Valoare:'), $query->br();
    print $query->em({-align=>'center'}, $textInput1);
    print $query->hr();
	
	print $query->hr();
    print $query->p('A doua Valoare:'), $query->br();
    print $query->em({-align=>'center'}, $textInput2);
    print $query->hr();
	
	
	my $operatie = $query->param(-name=>'RadioOne');
    print $query->hr();
    print $query->p('Selectie grup radio:'), $query->br();
    print $query->em({-align=>'center'}, $operatie);
    print $query->hr();
	
	if($operatie eq "Adunare")
  {	print $query->hr();
    print $query->p('Rezultatul este:'), $query->br();
    print $query->em({-align=>'center'}, $textInput1+$textInput2);
    print $query->hr();}
	
	if($operatie eq "Scadere")
	{print $query->hr();
    print $query->p('Rezultatul este:'), $query->br();
    print $query->em({-align=>'center'}, $textInput1-$textInput2);
    print $query->hr();}
	
	if($operatie eq "Inmultire")
	{print $query->hr();
    print $query->p('Rezultatul este:'), $query->br();
    print $query->em({-align=>'center'}, $textInput1*$textInput2);
    print $query->hr();}
	
	if($operatie eq "Impartire")
	{ print $query->hr();
		if($textInput2=='0')
		{die ( "Numitorul este 0." );}
    print $query->p('Rezultatul este:'), $query->br();
    print $query->em({-align=>'center'}, $textInput1/$textInput2);
    print $query->hr();}
	
	if($operatie eq "Ridicare la putere")
	{print $query->hr();
		if($textInput2=='0'&&$textInput1=='0')
		{die ( "Baza si exponentul sunt 0." );}
    print $query->p('Rezultatul este:'), $query->br();
    print $query->em({-align=>'center'}, $textInput1**$textInput2);
    print $query->hr();}
	
	# generare info
    print $query->br("URL:", $query->url() );
    print $query->br("URL relativ:", $query->url(-relative=>1) );
    print $query->br("URL absolut:", $query->url(-absolute=>1) );
    print $query->br("URL cu path:", $query->url(-path_info=>1) );
    print $query->br("URL cu path si query info:", 
		     $query->url(-path_info=>1, -query=>1) );
    print $query->hr();
	

}


print $query->end_html;